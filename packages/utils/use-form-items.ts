import { formContextKey, type FormContext, type FormValidateCallback } from 'element-plus'
import { inject, computed, watch, nextTick, useSlots, provide } from 'vue'
import { getProp } from 'element-plus/es/utils/objects'
import type { FormItemProps } from '../form-item'
export const formLayoutContextKey = 'formLayoutContext'
import { $CLS_PREFIX } from './use-global-const'

type Props<T> = {
  items: (FormItemProps & T)[]
  modelProp?: string
  viewModel?: boolean
  scope?: Record<string, any>
}

export interface FormLayoutContext {
  refs: Record<string, any>
  slots: Record<string, any>
}

export function useFormItems<T>(props: Props<T>) {
  const formContext = inject(formContextKey) as FormContext
  const formSlots: FormLayoutContext['slots'] = useSlots()
  const formRefs: FormLayoutContext['refs'] = {}

  const formItems = computed<(typeof props)['items']>(() => {
    return props.items.filter((v) => v.hidden !== true)
  })

  function getFormItemProp(prop = '') {
    return props.modelProp && prop ? props.modelProp + '.' + prop : prop || ''
  }

  function getFormItemProps(item: FormItemProps) {
    const prop = getFormItemProp(item.prop)
    const scope = props.scope || {}
    const viewModel = typeof item.viewModel == 'boolean' ? item.viewModel : props.viewModel
    return { ...scope, ...item, prop, viewModel }
  }

  function getRequiredAsteriskClass(item: FormItemProps) {
    const position = formContext?.requireAsteriskPosition || 'left'
    const className =
      position == 'right' ? `${$CLS_PREFIX}-required-label-right` : `${$CLS_PREFIX}-required-label`
    if (formContext?.hideRequiredAsterisk) return ''
    if (item.required) return className
    if (item.rules) {
      const rules = Array.isArray(item.rules) ? item.rules : [item.rules]
      if (rules.some((v) => v?.required)) return className
    }
    if (formContext.rules && item.prop) {
      const formRules = getProp(formContext.rules, item.prop).value as FormItemProps['rules']
      if (formRules) {
        const rules = Array.isArray(formRules) ? formRules : [formRules]
        if (rules.some((v) => v?.required)) return className
      }
    }
  }

  function validate(callback: FormValidateCallback) {
    const propKeys = formItems.value.map((v) => getFormItemProp(v.prop))
    return formContext.validateField(propKeys, callback)
  }

  function resetFields(props: string[]) {
    const propKeys = props || formItems.value.map((v) => getFormItemProp(v.prop))
    return formContext.resetFields(propKeys)
  }

  function getRef(prop: string) {
    if (prop && formRefs[prop]) {
      return formRefs[prop]
    }
  }

  watch(
    () => formContext.model,
    (newv, oldv) => {
      if (newv !== oldv) {
        nextTick(formContext.clearValidate)
      }
    }
  )

  provide(formLayoutContextKey, { refs: formRefs, slots: formSlots } as FormLayoutContext)

  return {
    formContext,
    formSlots,
    formRefs,
    formItems,
    validate,
    resetFields,
    getRef,
    getFormItemProp,
    getFormItemProps,
    getRequiredAsteriskClass
  }
}

export default useFormItems
