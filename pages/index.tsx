import Link from 'next/link'
import Layout from '../components/Layout'
import { useSession, signIn, signOut } from "next-auth/react"

export default function IndexPage () {
  const { data: session,status } = useSession()
  if(session){
    return (
    <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
    )
  }
  return (<>
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
    Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
      <br/>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
  </>
  )
}