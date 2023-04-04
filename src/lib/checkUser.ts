import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

const secret = process.env.NEXTAUTH_SECRET

interface Token {
  user: {
    role: string
  }
}

// CHECKING FUNCTIONS
export const hasToken = async (req: NextApiRequest): Promise<boolean> => {
  const token = await getToken({ req, secret })
  if (!token) {
    return false
  }
  return true
}

// API MIDDLEWARE
export const hasTokenMiddleware = async (req: NextApiRequest, res: NextApiResponse, next?: (error?: Error) => void): Promise<void> => {
  const token = await getToken({ req, secret })
  if (!token) {
    if (next) {
      return next(new Error('Not Allowed - Not logged in'))
    }
    return
  }
  if (next) {
    next()
  }
}

