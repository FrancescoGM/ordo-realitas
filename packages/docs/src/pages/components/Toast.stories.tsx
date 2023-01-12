import {
  Button,
  Spinner as SpinnerRoot,
  ToastProvider,
  useToast,
} from '@ordo-realitas/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback/Toast',
  argTypes: {},
  component: SpinnerRoot,
} as ComponentMeta<typeof SpinnerRoot>

const Wrapper = () => {
  const { onToast } = useToast()
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button
        onClick={() =>
          onToast({
            title: 'Sucesso!',
            description: 'Seu nome foi atualizado',
            status: 'success',
          })
        }
      >
        success
      </Button>
      <Button
        onClick={() =>
          onToast({
            title: 'Erro!',
            description: 'Um erro ocorreu ao tentar atualizar seu nome',
            status: 'error',
          })
        }
      >
        error
      </Button>
      <Button
        onClick={() =>
          onToast({
            title: 'Informação!',
            description: 'Você não tem permissão para fazer está ação',
            status: 'info',
          })
        }
      >
        info
      </Button>
      <Button
        onClick={() =>
          onToast({
            title: 'Aviso!',
            description: 'Seu e-mail deve ser preenchido',
            status: 'warning',
          })
        }
      >
        warning
      </Button>
    </div>
  )
}

export const Spinner: ComponentStory<typeof SpinnerRoot> = (args) => {
  return (
    <ToastProvider>
      <Wrapper />
    </ToastProvider>
  )
}
