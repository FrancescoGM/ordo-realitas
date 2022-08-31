import type { HTMLAttributes } from 'react'

import { FormControlOptions } from '../FormControlContext/FormControlContext.types'

export type FormControlProps = HTMLAttributes<HTMLDivElement> &
  FormControlOptions
