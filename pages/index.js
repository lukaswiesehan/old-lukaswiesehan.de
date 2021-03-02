import Head from 'next/head'
import {Header} from '../components/header'
import {Footer} from '../components/footer'

export default function Index() {
  return (
    <div className="text-cool-gray-200">
      <Head>
        <title>Lukas Wiesehan | Design & Development</title>
      </Head>
      <Header></Header>
      <main className="h-screen">
        <button className="hover:text-teal-300">TEST-BUTTON</button>
      </main>
      <Footer></Footer>
    </div>
  )
}
