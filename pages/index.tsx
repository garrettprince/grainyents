import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../lib/components/Footer'
import Main from '../lib/components/Main'
import Nav from '../lib/components/Nav'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Main />

      <Footer />
    </div>
  )
}

export default Home
