import Head from 'next/head'
import {Header} from '../components/header'
import {Footer} from '../components/footer'

export default function Index() {
  return (
    <div className="dark:text-cool-gray-200 text-blue-gray-800">
      <Head>
        <title>Lukas Wiesehan | Design & Development</title>
      </Head>
      <Header></Header>
      <main>
        <section id="showcase" className="h-screen"></section>
        <section id="services" className="h-screen"></section>
        <section id="contact" className="h-screen"></section>
        <section id="about" className="h-screen"></section>
        <section id="blog" className="h-screen"></section>
      </main>
      <Footer></Footer>
    </div>
  )
}
