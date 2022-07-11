import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'

import { Provider, Viewport } from '@radix-ui/react-toast'

import { styled } from '../../stitches.config'
import { Toast } from '../components/Toast'

type QueueToast = {
  title?: string
  description?: string
  status?: 'success' | 'error' | 'warning' | 'info'
}

export type ToastContextData = {
  onToast(data: QueueToast): void
}

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData
)

type ToastProviderProps = {
  children: ReactNode
}

const TOAST_DURATION_IN_MILLISECONDS = 1000 * 3
const FADE_EFFECT_DURATION_IN_MILLISECONDS = 100

export function ToastProvider({ children }: ToastProviderProps): JSX.Element {
  const [toast, setToast] = useState<QueueToast | null>(null)
  const [open, setOpen] = useState(false)
  const timerRef = useRef<NodeJS.Timeout>(
    setTimeout(() => undefined, TOAST_DURATION_IN_MILLISECONDS)
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
    <ToastContext.Provider value={{ onToast }}>
      {children}
      <Provider
        swipeDirection="right"
        duration={TOAST_DURATION_IN_MILLISECONDS}
      >
        <Toast {...toast} open={!!open} onOpenChange={setOpen} />

        <ToastViewport />
      </Provider>
    </ToastContext.Provider>
  )
}

const ToastViewport = styled(Viewport, {
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,

  padding: '$8',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',

  '@md': {
    padding: '$4'
  }
})
