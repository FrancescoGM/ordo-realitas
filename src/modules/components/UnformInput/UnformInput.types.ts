import { ReactElement, ReactNode } from 'react'

import { FormControlOptions } from '@components/FormControl'
import { InputProps } from '@components/Input'

export type UnformInputProps = InputProps &
  FormControlOptions & {
    name: string
    label?: string
    leftIcon?: ReactElement
    rightIcon?: ReactElement
    helperText?: ReactNode
  }
