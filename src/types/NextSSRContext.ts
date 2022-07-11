import { NextPageContext, NextApiResponse } from 'next'

import { Response, Request } from 'express'
export type NextSSRContext =
  | Pick<NextPageContext, 'res'>
  | {
      res: NextApiResponse
    }
  | {
      req: Request
    }
  | {
      res: Response
    }
  | null
  | undefined
