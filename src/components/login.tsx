import { useSession, signIn, signOut } from "next-auth/react";


export default function LoginComponent() {
  return (
    <button className='rounded-xl bg-neutral-900 px-4 py-2 font-medium text-white hover:bg-black/80' onClick={() => signIn('google')}>Sign in with Google</button>
  )
}