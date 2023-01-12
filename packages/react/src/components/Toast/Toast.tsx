import { IoClose } from 'react-icons/io5'

import { Icon } from '../Icon'
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
      {title && <ToastTitle>{title}</ToastTitle>}
      {description && <ToastDescription>{description}</ToastDescription>}
      <ToastClose status={status}>
        <Icon as={IoClose} />
      </ToastClose>
    </ToastRoot>
  )
}
