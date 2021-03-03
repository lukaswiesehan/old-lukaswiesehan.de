import Head from 'next/head'
import {Header} from '../components/header'
import {Footer} from '../components/footer'
import {HeadingSection} from '../components/headingSection'
import {Carousel} from '../components/carousel'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Lukas Wiesehan | Design & Development</title>
      </Head>
      <Header></Header>
      <main>
        <section id="showcase" className="max-w-screen-lg mx-auto px-4 sm:px-8 md:px-16 mt-20 md:mt-32 lg:mt-48">
          <HeadingSection 
            subtitle="Showcase" 
            emoji="🤙" 
            title={<>Full Service<br/><span className="text-blue-gray-700 dark:text-cool-gray-300">Design, Druck<br/>& Entwicklung</span></>}
            order="1"
          >
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
          </HeadingSection>
          <Carousel>
            <div className="p-8">henlo</div>
            <div className="p-8">hi</div>
            <div className="p-8">moin</div>
          </Carousel>
        </section>
        <section id="services" className="h-screen"></section>
        <section id="contact" className="h-screen"></section>
        <section id="about" className="h-screen"></section>
        <section id="blog" className="h-screen"></section>
      </main>
      <Footer></Footer>
    </div>
  )
}
