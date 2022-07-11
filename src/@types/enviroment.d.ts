declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_CLIENT_ID: string
      NEXT_PUBLIC_BACKEND_BASE_URL: string
    }
  }
}

export {}
