import { NextApiRequest, NextApiResponse } from 'next'
import handler from '../../lib/handler'
import { hasTokenMiddleware } from '../../lib/checkUser'

handler
  .use(hasTokenMiddleware)
  .get(protectedAPI)

async function protectedAPI(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.status(200).send('Success!')
}

export default handler
