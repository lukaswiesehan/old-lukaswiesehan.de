import Head from 'next/head'
import Image from 'next/image'
import {LandingHeader} from '../components/landingHeader'
import {Footer} from '../components/footer'
import {HeadingSection} from '../components/headingSection'
import {ShowcaseCard, ShowcaseCarousel} from '../components/showcase'
import {ProductCarousel} from '../components/products'
import {Card} from '../components/card'
import {Link} from '../components/link'
import {getSortedShowcaseEntries} from '../lib/showcase'
import {getSortedProducts} from '../lib/products'

export async function getStaticProps() {
  const allShowcases = getSortedShowcaseEntries()
  const allProducts = getSortedProducts()
  return {
    props: {
      allShowcases,
      allProducts
    }
  }
}

const DevelopmentCard = ({title, icon, text, link}) => (
  <Card>
    <div className="group relative z-10 p-4 pb-6 md:p-6 md:pb-8">
      <div className="flex justify-between mb-4">
        <h3 className="font-bold text-xl">{title}</h3>
        <div className="w-8 h-8 text-teal-600 dark:text-teal-500 transition-transform duration-200 ease-in-out transform group-hover:scale-110">
          {icon}
        </div>
      </div>
      <p>{text}</p>
      <p className="mt-2"><Link href={link}>Mehr erfahren</Link></p>
    </div>
  </Card>
)

export default function Index({allShowcases, allProducts}) {
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
        <section id="services-design" className="relative mt-32 lg:mt-48">
          <div className="absolute w-full sm:w-3/4 md:w-1/2 lg:w-1/3 flex justify-end pr-4">
            <div className="dark:hidden -ml-12 2xl:-mr-32"><Image src="/img/backgrounds/design_background.svg" width="800" height="614"></Image></div>
            <div className="hidden dark:block -ml-12 2xl:-mr-32"><Image src="/img/backgrounds/design_background_dark.svg" width="800" height="614"></Image></div>
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
                  <div className="group relative z-10 p-4 pb-6 md:p-6 md:pb-8">
                    <div className="flex justify-between mb-4">
                      <h3 className="font-bold text-xl">Branding</h3>
                      <div className="w-8 h-8 text-teal-600 dark:text-teal-500 transition-transform duration-200 ease-in-out transform group-hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                    </div>
                    <p>Logo, Briefpapier, Umschläge, Visitenkarten und alles, was Dein Unternehmen unverwechselbar macht.</p>
                  </div>
                </Card>
                <Card>
                  <div className="group relative z-10 p-4 pb-6 md:p-6 md:pb-8">
                    <div className="flex justify-between mb-4">
                      <h3 className="font-bold text-xl">Webdesign</h3>
                      <div className="w-8 h-8 text-teal-600 dark:text-teal-500 transition-transform duration-200 ease-in-out transform group-hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <p>Webdesign - exakt auf Dein Unternehmen und Deine Bedürfnisse abgestimmt, modern und für mobile Geräte optimiert.</p>
                  </div>
                </Card>
                <Card>
                  <div className="group relative z-10 p-4 pb-6 md:p-6 md:pb-8">
                    <div className="flex justify-between mb-4">
                      <h3 className="font-bold text-xl">Marketing</h3>
                      <div className="w-8 h-8 text-teal-600 dark:text-teal-500 transition-transform duration-200 ease-in-out transform group-hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                      </div>
                    </div>
                    <p>Flyer, Plakate, Sticker, uvm. zur Bewerbung Deines Unternehmens oder Deiner Veranstaltung.</p>
                  </div>
                </Card>
                <Card>
                  <div className="group relative z-10 p-4 pb-6 md:p-6 md:pb-8">
                    <div className="flex justify-between mb-4">
                      <h3 className="font-bold text-xl">Social</h3>
                      <div className="w-8 h-8 text-teal-600 dark:text-teal-500 transition-transform duration-200 ease-in-out transform group-hover:scale-110">
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



        <section id="services-print" className="relative mt-32 lg:mt-48">
          <div className="absolute overflow-hidden 2xl:overflow-visible right-0 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 pl-4">
            <div className="dark:hidden -mr-48 2xl:-ml-24"><Image src="/img/backgrounds/print_background.svg" width="800" height="614"></Image></div>
            <div className="hidden dark:block -mr-48 2xl:-ml-24"><Image src="/img/backgrounds/print_background_dark.svg" width="800" height="614"></Image></div>
          </div>
          <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16 lg:pt-16 lg:flex lg:flex-row-reverse">
            <div className="flex justify-end lg:w-1/3">
              <Image src="/img/illustrations/print_illustration.svg" width="500" height="459"></Image>
            </div>
            <div className="lg:w-2/3 pt-16 lg:pt-0 lg:pr-20 xl:pr-32">
              <HeadingSection 
                subtitle="Services" 
                emoji="🤝" 
                title="Druck"
                order="2"
              >
                <p>Alles, was Du für Dein Unternehmen oder Deine Veranstaltung an Werbemitteln benötigst, lasse ich für Dich drucken und direkt zu Dir liefern.</p>
              </HeadingSection>

              <ProductCarousel>
                {allProducts.map((product, index) => (
                  <div key={index} className="relative z-10 p-4 py-6 md:p-6 md:py-8">
                    <div className="dark:hidden h-40 md:h-52 mx-4 relative">
                      <Image src={`/img/products/${product.imageLight}`} layout="fill" className="object-contain object-center"></Image>
                    </div>
                    <div className="hidden dark:block h-40 md:h-52 mx-4 relative">
                      <Image src={`/img/products/${product.imageDark}`} layout="fill" className="object-contain object-center"></Image>
                    </div>
                    <div className="text-center mt-4 md:mt-12">
                      <h3 className="font-bold text-base hyphens">{product.name}</h3>
                    </div>
                    <div className="absolute left-0 top-0 w-full h-full"></div>
                  </div>
                ))}
              </ProductCarousel>

              

            </div>
          </div>
        </section>



        <section id="services-development" className="relative mt-32 lg:mt-48">
          <div className="absolute w-full sm:w-3/4 md:w-1/2 lg:w-1/3 flex justify-end pr-4">
            <div className="dark:hidden -ml-48 2xl:-mr-48"><Image src="/img/backgrounds/development_background.svg" width="800" height="614"></Image></div>
            <div className="hidden dark:block -ml-48 2xl:-mr-48"><Image src="/img/backgrounds/development_background_dark.svg" width="800" height="614"></Image></div>
          </div>
          <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16 lg:pt-16 xl:pt-28 2xl:pt-40 lg:flex">
            <div className="lg:w-1/3">
              <Image src="/img/illustrations/development_illustration.svg" width="500" height="550"></Image>
            </div>
            <div className="lg:w-2/3 pt-16 lg:pt-0 lg:pl-20 xl:pl-32">
              <HeadingSection 
                subtitle="Services" 
                emoji="🤝" 
                title="Entwicklung"
                order="2"
              >
                <p>Umsetzung Deiner Website in modernsten Technologien - genau auf Deine Bedürfnisse abgestimmt.</p>
              </HeadingSection>
              <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                <DevelopmentCard 
                  title="Corporate Website"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                  text="Deine moderne Unternemenswebsite hebt Dich von der Konkurrenz ab."
                  link="/"
                />
                <DevelopmentCard 
                  title="Online Shop"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                  text="Erreiche nachhaltig mehr Kunden und sichere Dein Unternehmen für die Zukunft."
                  link="/"
                />
                <DevelopmentCard 
                  title="Landing Page"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>}
                  text="Promote ein Produkt oder eine Veranstaltung mit einer eigenen Seite."
                  link="/"
                />
                <DevelopmentCard 
                  title="Web App"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>}
                  text="Digitalisiere Deine Geschäftsprozesse mit individuellen Software-Lösungen."
                  link="/"
                />
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
