import { useContext } from 'react'

import { ToastContext, ToastContextData } from '../contexts/ToastContext'

export function useToast(): ToastContextData['onToast'] {
  const { onToast } = useContext(ToastContext)

  return onToast
}
