import { ElMessage, ElMessageBox } from 'element-plus'
import useGlobalConfig from '../utils/use-global-config'

const confirm = ({ content }: { content: string; callback: Function }) => {
  const { I18n } = useGlobalConfig()
  return ElMessageBox.confirm(content, {
    confirmButtonText: I18n('el.messagebox.confirm'),
    cancelButtonText: I18n('el.messagebox.cancel'),
    type: 'warning'
  })
    .then(() => {
      return 'confirm'
    })
    .catch(() => {
      return 'cancel'
    })
}

const message = ({ content, status }: { content: string; status: any }) => {
  ElMessage({
    type: status,
    message: content
  })
}

const modalAdapter = {
  message,
  confirm
}

export { modalAdapter }
