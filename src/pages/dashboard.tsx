import LogoutComponent from "@/components/logout"
import { useSession, getSession } from "next-auth/react"
import { useRouter } from "next/router"
import { getServerSession } from "next-auth/next"
import authOptions from "./api/auth/[...nextauth]"
import { IncomingMessage, ServerResponse } from "http"
import { NextApiRequest, NextApiResponse } from "next"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter();
  if (session) {
    return (
      <>
        <h1>Hello Dashboard</h1>
        <LogoutComponent></LogoutComponent>
      </>

    )
  }
  return (
    <>
      <p>Access Denied</p>
    </>
  )
}

export async function getServerSideProps(context: { req: any | NextApiRequest | (IncomingMessage & { cookies: Partial<{ [key: string]: string }> }); res: any | ServerResponse<IncomingMessage> | NextApiResponse<any> }) {
  return {
    props: {
      session: await getServerSession(
        context.req,
        context.res,
        authOptions
      ),
    },
  }
}