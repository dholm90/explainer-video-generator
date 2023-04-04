import { useSession, signIn, signOut } from "next-auth/react";

export default function LogoutComponent() {
  return (
    <button className='rounded-xl bg-neutral-900 px-4 py-2 font-medium text-white hover:bg-black/80' onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
  )
}