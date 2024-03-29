import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {

  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    // We can pass in additional information from the user document MongoDB returns
    // This could be avatars, role, display name, etc...
    async jwt({ token, user }) {
      token.userRole = "admin"
      if (user) {

        token.user = {
          _id: user.id,
          email: user.email,

        }
      }
      return token
    },

  },
}
export default NextAuth(authOptions)