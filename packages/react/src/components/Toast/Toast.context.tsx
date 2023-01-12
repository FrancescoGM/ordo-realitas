import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'

import { ToastProvider as PrimitiveToastProvider } from '@radix-ui/react-toast'

import { createContext } from '../../utils'
import { Toast } from './Toast'
import { ToastViewport } from './Toast.styles'

type QueueToast = {
  title?: string
  description?: string
  status?: 'success' | 'error' | 'warning' | 'info'
}

export type ToastContextData = {
  onToast(data: QueueToast): void
}

const [Provider, useToast] = createContext<ToastContextData>({
  name: 'ToastContext',
  strict: false,
})

export { useToast }

type ToastProviderProps = {
  children: ReactNode
}

const TOAST_DURATION_IN_MILLISECONDS = 1000 * 3
const FADE_EFFECT_DURATION_IN_MILLISECONDS = 100

export function ToastProvider({ children }: ToastProviderProps) {
  const [toast, setToast] = useState<QueueToast | null>(null)
  const [open, setOpen] = useState(false)
  const timerRef = useRef(
    setTimeout(() => undefined, TOAST_DURATION_IN_MILLISECONDS),
  )

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  const onToast = useCallback((data: QueueToast) => {
    setOpen(false)

    clearTimeout(timerRef.current)

    timerRef.current = setTimeout(() => {
      setToast(data)
      setOpen(true)
    }, FADE_EFFECT_DURATION_IN_MILLISECONDS)
  }, [])

  return (
    <Provider value={{ onToast }}>
      {children}
      <PrimitiveToastProvider
        swipeDirection="right"
        duration={TOAST_DURATION_IN_MILLISECONDS}
      >
        <Toast {...toast} open={!!open} onOpenChange={setOpen} />

        <ToastViewport />
      </PrimitiveToastProvider>
    </Provider>
  )
}
