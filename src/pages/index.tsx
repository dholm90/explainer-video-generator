import Meta from '@/components/meta'
import Image from 'next/image'
import LoginComponent from '@/components/login'
import ClientSection from '../components/clientSection'
import { useSession, signOut } from 'next-auth/react';
import Head from 'next/head'


export default function Home() {

  const { data: session } = useSession();

  return (
    <div>
      <Meta />


      <main className='flex min-h-screen w-full flex-col items-center justify-center gap-4 px-8 text-center'>

        <h1 className='y-4 text-6xl font-bold'>Explainer Video Generator</h1>
        <h2 className='y-4 text-4xl font-bold'>Generate explainer videos complete with scripts and storyboards</h2>


        {session?.user?.email ? (
          <>
            <ClientSection></ClientSection>
            <button className='rounded-xl bg-neutral-900 px-4 py-2 font-medium text-white hover:bg-black/80' onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <>
            <Meta />
            <LoginComponent></LoginComponent>
          </>

        )}

      </main>
    </div>
  )

}
