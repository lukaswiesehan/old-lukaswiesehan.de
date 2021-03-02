import {motion, useCycle} from 'framer-motion'
import {animateScroll as scroll} from 'react-scroll'
import Link from 'next/link'

const NavLink = props => (
  <span className="block group transition-all duration-300 transform hover:text-teal-300 hover:scale-105 hover:translate-x-3 sm:hover:translate-x-4 md:hover:translate-x-5 lg:hover:translate-x-1">
    <Link href={props.href}>{props.title}</Link>
    <span className="inline-block ml-2 opacity-0 transform -translate-x-2 transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:translate-x-0">{props.emoji}</span>
  </span>
)

const NavItems = () => {
  return (
    <ul>
      <li className="">
        <NavLink href="/" title="Showcase" emoji="🤙"></NavLink>
        <div className="h-8 my-4 ml-3 border-l-2 border-cool-gray-600"></div>  
      </li>
      <li>
        <NavLink href="/" title="Services" emoji="🤝"></NavLink>
        <div className="h-8 my-4 ml-3 border-l-2 border-cool-gray-600"></div>
      </li>
      <li>
        <NavLink href="/" title="Kontakt" emoji="👋"></NavLink>
        <div className="h-8 my-4 ml-3 border-l-2 border-cool-gray-600"></div>
      </li>
      <li>
        <NavLink href="/" title="Über mich" emoji="✌️"></NavLink>
        <div className="h-8 my-4 ml-3 border-l-2 border-cool-gray-600"></div>
      </li>
      <li>
        <NavLink href="/" title="Blog" emoji="✍️"></NavLink>
      </li>
    </ul>
  )
}

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
)

const MobileNavToggle = ({toggle}) => (
    <button onClick={toggle} className="block z-50 transition-all duration-300 transform hover:text-teal-300 hover:scale-110 focus:outline-none">
      <svg className="w-6 h-6 stroke-current" viewBox="0 0 23 23">
        <Path variants={{closed: {d: "M 2 2.5 L 20 2.5"}, open: {d: "M 3 16.5 L 17 2.5"}}}/>
        <Path d="M 2 9.423 L 20 9.423" variants={{closed: {opacity: 1}, open: {opacity: 0}}} transition={{duration: 0.1}}/>
        <Path variants={{closed: {d: "M 2 16.346 L 20 16.346"}, open: {d: "M 3 2.5 L 17 16.346"}}}/>
      </svg>
    </button>
)

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const liVariants = {
  open: {x: 0},
  closed: {x: -200}
};

const MobileNavItems = () => {
  return (
    <motion.ul variants={ulVariants}>
      <motion.li variants={liVariants}>
        <NavLink href="/" title="Showcase" emoji="🤙"></NavLink> 
        <div className="h-4 my-2 ml-3 border-l-2 border-cool-gray-600"></div>  
      </motion.li>
      <motion.li variants={liVariants}>
        <NavLink href="/" title="Services" emoji="🤝"></NavLink>
        <div className="h-4 my-2 ml-3 border-l-2 border-cool-gray-600"></div>
      </motion.li>
      <motion.li variants={liVariants}>
        <NavLink href="/" title="Kontakt" emoji="👋"></NavLink>
        <div className="h-4 my-2 ml-3 border-l-2 border-cool-gray-600"></div>
      </motion.li>
      <motion.li variants={liVariants}>
        <NavLink href="/" title="Über mich" emoji="✌️"></NavLink>
        <div className="h-4 my-2 ml-3 border-l-2 border-cool-gray-600"></div>
      </motion.li>
      <motion.li variants={liVariants}>
        <NavLink href="/" title="Blog" emoji="✍️"></NavLink>
      </motion.li>
    </motion.ul>
  )
}

const bgVariants = {
  open: {opacity: 1},
  closed: {opacity: 0}
}

export const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const toggleNav = () => {
    if(!isOpen) {
      document.body.classList.add('nav-opened')
    } else {
      scroll.scrollToTop()
      document.body.classList.remove('nav-opened')
    }
    toggleOpen()
  }

  return (
    <div>
      <motion.nav className="lg:hidden" initial={false} animate={isOpen ? "open" : "closed"}>
        <motion.div className="fixed w-screen h-screen left-0 top-0 pt-8 md:pt-16 px-4 sm:px-8 md:px-16 bg-cool-gray-900 bg-opacity-90" variants={bgVariants}>
          <MobileNavItems></MobileNavItems>
        </motion.div>
        <MobileNavToggle toggle={toggleNav} />
      </motion.nav>
      <nav className="hidden lg:block">
        <NavItems></NavItems>
      </nav>
    </div>
  )
}