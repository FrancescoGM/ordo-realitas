import { ToastProps as RootProps } from '@radix-ui/react-toast'

export type ToastProps = RootProps & {
  title?: string
  description?: string
  status?: 'success' | 'error' | 'warning' | 'info'
}
