import Link from 'next/link'
import {Navigation} from './navigation'
import { useTheme } from 'next-themes'

export const Header = () => {
  const { theme, setTheme } = useTheme()
  const toggleDarkMode = () => {
    if(theme =='dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <header className="w-full max-h-4/5-screen md:max-h-screen flex px-4 sm:px-8 md:px-16 transition-bg duration-300 ease-in-out bg-header-background-sm dark:bg-header-background-sm-dark sm:bg-header-background-md sm:dark:bg-header-background-md-dark lg:bg-header-background-lg lg:dark:bg-header-background-lg-dark bg-right-top bg-no-repeat">
      {/* LEFT SIDE: TITLE & NAVIGATION */}
      <div className="relative z-10 flex-shrink-0 flex flex-col pt-8 md:py-16 text-xl">
        <div>
          <p className="leading-tight w-6 overflow-visible lg:w-auto"><span className="font-bold">Lukas<span className="ml-1">Wiesehan</span></span><br/>Design<span className="ml-1">&</span><br/>Development</p>
        </div>
        <div className="flex-grow h-16 my-4 ml-3 border-l-2 border-warm-gray-400 dark:border-cool-gray-600"></div>
        <Navigation></Navigation>
      </div>
      {/* CENTER: ILLUSTRATION */}
      <div className="hidden lg:block flex-grow"></div>
      <div className="flex-grow w-full flex flex-row-reverse mx-8 pb-8">
        <img className="sm:hidden" src="/img/header_illustration_sm.svg" alt="Workspace Illustration"/>
        <img className="hidden sm:block lg:hidden" src="/img/header_illustration_md.svg" alt="Workspace Illustration"/>
        <img className="hidden lg:block xl:h-screen-p-8" src="/img/header_illustration_lg.svg" alt="Workspace Illustration"/>
      </div>
      {/* RIGHT SIDE: LINKS */}
      <div className="relative z-10 flex-shrink-0 flex flex-col pt-8 md:py-16">
        <ul className="flex-column">
          <li>
            <span className="block transition-all duration-300 transform hover:text-teal-600 dark:hover:text-teal-300 hover:scale-110"><Link href="https://www.linkedin.com/in/lukas-wiesehan-74931b1bb/"><svg className="fill-current w-6 cursor-pointer" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></Link></span>
          </li>
          <li>
            <span className="block transition-all duration-300 transform hover:text-teal-600 dark:hover:text-teal-300 hover:scale-110"><Link href="https://www.instagram.com/lukaswiesehan/"><svg className="fill-current w-6 mt-4 cursor-pointer" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></Link></span>
          </li>
          <li>
            <span className="block transition-all duration-300 transform hover:text-teal-600 dark:hover:text-teal-300 hover:scale-110"><Link href=""><svg className="fill-current w-6 mt-4 cursor-pointer" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg></Link></span>
          </li>
        </ul>
        <div className="flex-grow h-16 my-4 mr-3 border-r-2 border-warm-gray-400 dark:border-cool-gray-600"></div>
        <div>
          <button onClick={toggleDarkMode} className="block transition-all duration-300 transform hover:text-teal-600 dark:hover:text-teal-300 hover:scale-110 focus:outline-none">
            <svg className="dark:hidden fill-current w-6" viewBox="0 0 352 512"><path fill="currentColor" d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"></path></svg>
            <svg className="hidden dark:block fill-current w-6" viewBox="0 0 352 512"><path fill="currentColor" d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path></svg>
          </button>
        </div>
      </div>      
    </header>
  )
}
