import { NextApiRequest, NextApiResponse } from 'next'
import nc, { NextConnect } from 'next-connect'

function onError(err: Error, req: NextApiRequest, res: NextApiResponse, next: () => void): void {
  console.error(err)
  res.status(500).end(err.toString())
}

const handler: NextConnect<NextApiRequest, NextApiResponse> = nc({
  onError: onError,
  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
    res.status(404).send('Page is not found')
  },
})

export default handler
