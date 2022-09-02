import { IoClose } from 'react-icons/io5'

import {
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastClose,
} from './Toast.styles'
import { ToastProps } from './Toast.types'

export function Toast({
  title,
  description,
  status = 'success',
  ...rest
}: ToastProps) {
  return (
    <ToastRoot status={status} {...rest}>
      {title && <ToastTitle status={status}>{title}</ToastTitle>}
      {description && (
        <ToastDescription status={status}>{description}</ToastDescription>
      )}
      <ToastClose status={status}>
        <IoClose />
      </ToastClose>
    </ToastRoot>
  )
}
