import Head from 'next/head'
import Image from 'next/image'
import {LandingHeader} from '../components/landingHeader'
import {Footer} from '../components/footer'
import {HeadingSection} from '../components/headingSection'
import {ShowcaseCard, ShowcaseCarousel} from '../components/showcase'
import {Card} from '../components/card'
import {getSortedShowcaseEntries} from '../lib/showcase'

export async function getStaticProps() {
  const allShowcases = getSortedShowcaseEntries()
  return {
    props: {
      allShowcases
    }
  }
}

export default function Index({allShowcases}) {
  return (
    <div>
      <Head>
        <title>Lukas Wiesehan | Design & Development</title>
      </Head>
      {/* HEADER SECTION */}
      <LandingHeader></LandingHeader>
      <main>
        {/* SHOWCASE SECTION */}
        <section id="showcase" className="max-w-screen-lg mx-auto px-4 sm:px-8 md:px-16 mt-32 lg:mt-48">
          <HeadingSection 
            subtitle="Showcase" 
            emoji="🤙" 
            title={<>Full Service<br/><span className="text-blue-gray-700 dark:text-cool-gray-300">Design, Druck<br/>& Entwicklung</span></>}
            order="1"
          >
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
          </HeadingSection>
          <ShowcaseCarousel>
            {allShowcases.map((showcase) => (
              <ShowcaseCard
                key={showcase.id}
                title={showcase.title}
                tags={showcase.tags}
                slug={showcase.slug}
                link={`/showcase/${showcase.id}`}
                previewDesktop={`/img/showcase/${showcase.id}/${showcase.previewDesktop}`}
                previewMobile={`/img/showcase/${showcase.id}/${showcase.previewMobile}`}
              />
            ))}
          </ShowcaseCarousel>
        </section>
        {/* SERVICES SECTION */}
        <section id="services" className="relative mt-32 lg:mt-48">
          <div className="absolute w-full sm:w-3/4 md:w-1/2 lg:w-1/3 flex justify-end px-4">
            <div className="dark:hidden"><Image src="/img/backgrounds/design_background.svg" width="800" height="614"></Image></div>
            <div className="hidden dark:block"><Image src="/img/backgrounds/design_background_dark.svg" width="800" height="614"></Image></div>
          </div>


          <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16 lg:pt-16 xl:pt-28 2xl:pt-40 lg:flex">
            <div className="lg:w-1/3">
              <Image src="/img/illustrations/design_illustration.svg" width="500" height="287"></Image>
            </div>
            <div className="lg:w-2/3 pt-16 lg:pt-0 lg:pl-20 xl:pl-32">
              <HeadingSection 
                subtitle="Services" 
                emoji="🤝" 
                title="Design"
                order="2"
              >
                <p>Als Visual Designer erarbeite ich Brandings, Printmedien und Websites - immer mit viel Liebe zum Detail und abgestimmt auf Dein Unternehmen.</p>
              </HeadingSection>
              <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                <Card>
                  <div className="relative z-10 p-4 pb-6 md:p-6 md:pb-8">
                    <div className="flex justify-between mb-4">
                      <h3 className="font-bold text-xl">Branding</h3>
                      <div className="w-8 h-8 text-teal-600 dark:text-teal-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                    </div>
                    <p>Logo, Briefpapier, Umschläge, Visitenkarten und alles, was Dein Unternehmen unverwechselbar macht.</p>
                  </div>
                </Card>
                <Card>
                  <div className="relative z-10 p-4 pb-6 md:p-6 md:pb-8">
                    <div className="flex justify-between mb-4">
                      <h3 className="font-bold text-xl">Webdesign</h3>
                      <div className="w-8 h-8 text-teal-600 dark:text-teal-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <p>Webdesign - exakt auf Dein Unternehmen und Deine Bedürfnisse abgestimmt, modern und für mobile Geräte optimiert.</p>
                  </div>
                </Card>
                <Card>
                  <div className="relative z-10 p-4 pb-6 md:p-6 md:pb-8">
                    <div className="flex justify-between mb-4">
                      <h3 className="font-bold text-xl">Marketing</h3>
                      <div className="w-8 h-8 text-teal-600 dark:text-teal-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                      </div>
                    </div>
                    <p>Flyer, Plakate, Sticker, uvm. zur Bewerbung Deines Unternehmens oder Deiner Veranstaltung.</p>
                  </div>
                </Card>
                <Card>
                  <div className="relative z-10 p-4 pb-6 md:p-6 md:pb-8">
                    <div className="flex justify-between mb-4">
                      <h3 className="font-bold text-xl">Social</h3>
                      <div className="w-8 h-8 text-teal-600 dark:text-teal-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                      </div>
                    </div>
                    <p>Passende Profil- und Titelbilder, sowie professionelle Stories machen Deine Marke in sozialen Netzwerken bekannt.</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          







        </section>
        <section id="contact" className="h-screen"></section>
        <section id="about" className="h-screen"></section>
        <section id="blog" className="h-screen"></section>
      </main>
      <Footer></Footer>
    </div>
  )
}
