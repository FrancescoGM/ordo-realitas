import { NextApiRequest, NextPageContext } from 'next'

import { Request, Response } from 'express'

export type NookiesContext =
  | NextPageContext
  | {
      req: NextApiRequest
      res: Response
    }
  | {
      req: Request
      res: Response
    }
  | null
  | undefined
