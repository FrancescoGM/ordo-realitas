import { NextApiResponse, NextPageContext } from 'next'

import { Response } from 'express'

export type NookiesContext =
  | Pick<NextPageContext, 'res'>
  | {
      res: NextApiResponse
    }
  | {
      res: Response
    }
  | null
  | undefined
