import Link from 'next/link'
import {animateScroll as scroll} from 'react-scroll'

const currentYear = new Date().getFullYear()

export const Footer = () => (
  <footer className="relative z-10 bg-footer-background-sm dark:bg-footer-background-sm-dark lg:bg-footer-background lg:dark:bg-footer-background-dark bg-cover bg-left-top">
    <div className="max-w-screen-xl px-4 sm:px-8 md:px-16">
      <div className="inline-block pt-20 2xl:pt-32 pb-16 text-true-gray-500 dark:text-blue-gray-500">
        <p className="font-bold">&copy; Lukas Wiesehan {currentYear}</p>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div>
            <p className="font-bold text-xs uppercase tracking-widest text-true-gray-400 dark:text-blue-gray-700">Rechtliches</p>
            <ul className="mt-1">
              <li className="block transition-all duration-300 hover:text-true-gray-600 dark:hover:text-blue-gray-400"><Link href="/">Impressum</Link></li>
              <li className="block transition-all duration-300 hover:text-true-gray-600 dark:hover:text-blue-gray-400"><Link href="/">Datenschutz</Link></li>
              <li className="block transition-all duration-300 hover:text-true-gray-600 dark:hover:text-blue-gray-400"><Link href="/">Cookies</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xs uppercase tracking-widest text-true-gray-400 dark:text-blue-gray-700">Sonstiges</p>
            <ul className="mt-1">
              <li className="block transition-all duration-300 hover:text-true-gray-600 dark:hover:text-blue-gray-400"><Link href="/">Blog</Link></li>
              <li className="block transition-all duration-300 hover:text-true-gray-600 dark:hover:text-blue-gray-400"><Link href="/">Cheatsheet</Link></li>
              <li className="block transition-all duration-300 hover:text-true-gray-600 dark:hover:text-blue-gray-400"><Link href="/">Kostenrechner</Link></li>
            </ul>
          </div>
        </div>
        <ul className="flex mt-8 text-true-gray-400 dark:text-blue-gray-700">
          <li>
            <button onClick={scroll.scrollToTop} className="focus:outline-none"><svg className="fill-current h-6 mr-4 text-blue-gray-800 dark:text-cool-gray-200 block transition-all duration-300 transform hover:text-teal-600 dark:hover:text-teal-300 hover:scale-110" viewBox="0 0 512 512"><path fill="currentColor" d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm292 116V256h70.9c10.7 0 16.1-13 8.5-20.5L264.5 121.2c-4.7-4.7-12.2-4.7-16.9 0l-115 114.3c-7.6 7.6-2.2 20.5 8.5 20.5H212v116c0 6.6 5.4 12 12 12h64c6.6 0 12-5.4 12-12z"></path></svg></button>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/lukas-wiesehan-74931b1bb/"><svg className="fill-current h-6 mr-4 cursor-pointer block transition-all duration-300 transform hover:text-true-gray-500 dark:hover:text-blue-gray-500 hover:scale-110" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/lukaswiesehan/"><svg className="fill-current h-6 mr-4 cursor-pointer block transition-all duration-300 transform hover:text-true-gray-500 dark:hover:text-blue-gray-500 hover:scale-110" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></Link>
          </li>
          <li>
            <Link href="/"><svg className="fill-current h-6 cursor-pointer block transition-all duration-300 transform hover:text-true-gray-500 dark:hover:text-blue-gray-500 hover:scale-110" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg></Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)
