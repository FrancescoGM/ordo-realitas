import { ValidationError } from 'yup'

type ValidationErrors = {
  [key: string]: string
}

export function yupErrorToUnform(error: unknown): Record<string, string> {
  if (error instanceof ValidationError) {
    const validationErrors: ValidationErrors = {}
    error.inner.forEach(error => {
      if (error.path) validationErrors[error.path] = error.message
    })
    return validationErrors
  }
  return {}
}
