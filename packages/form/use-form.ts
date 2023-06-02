export function useForm(formItemsRef, methodKeys: string[]) {
  function getRef(prop: string) {
    if (prop === undefined) {
      return formItemsRef.value
    }
    return formItemsRef.value?.getRef(prop)
  }

  const extendInputMethods = (methodKeys: any[]) => {
    const funcs: any = {}
    methodKeys.forEach((name) => {
      funcs[name] = (...args: any[]) => {
        const $elInput: any = formItemsRef.value
        if ($elInput && $elInput[name]) {
          return $elInput[name](...args)
        }
      }
    })
    return funcs
  }
  return { getRef, ...extendInputMethods(methodKeys) }
}
