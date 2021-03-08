import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {wrap} from 'popmotion'
import Image from 'next/image'
import {Link} from './link'
import {Card} from './card'

export const ShowcaseCard = ({title, tags, slug, link, previewDesktop, previewMobile}) => (
  <div className="relative z-10 md:flex h-full">
    <div className="w-full md:w-7/12 lg:w-1/2 md:h-full p-4 md:p-8 flex flex-col justify-end">
      <div>
        <p>
          {tags.map((tag, index) => (
            <span key={index} className="inline-block rounded-full px-3 py-px mr-2 font-bold text-xs uppercase tracking-wider bg-teal-500 text-teal-900">{tag}</span>
          ))}
        </p>
        <h3 className="mt-4 font-bold text-2xl md:text-3xl">{title}</h3>
        <p className="mt-4"><span className="line-clamp-2 md:line-clamp-3">{slug}</span><Link href={link}>Weiterlesen</Link></p>
      </div>
    </div>
    <div className="relative w-full md:w-5/12 lg:w-1/2 h-full pt-4 md:pt-12">
      <div className="absolute w-full">
        <div className="relative overflow-hidden bg-true-gray-400 dark:bg-blue-gray-400 p-2 rounded-lg mx-auto md:ml-0 w-48 sm:w-72 transform -rotate-6">
          <Image src={previewDesktop} width="300" height="500"></Image>
          <div className="absolute left-0 top-0 w-full h-full bg-true-gray-300 dark:bg-blue-gray-400 bg-opacity-40 dark:bg-opacity-40"></div>
        </div>
      </div>
      <div className="absolute w-full pl-36 sm:pl-64 md:pl-0">
        <div className="relative overflow-hidden bg-true-gray-400 dark:bg-blue-gray-400 p-2 pb-1 mx-auto md:ml-56 mt-6 md:mt-12 rounded-lg w-20 md:w-32 transform -rotate-6">
          <Image src={previewMobile} width="150" height="300"></Image>
          <div className="absolute left-0 top-0 w-full h-full bg-true-gray-300 dark:bg-blue-gray-400 bg-opacity-40 dark:bg-opacity-40"></div>
        </div>
      </div>
    </div>
  </div>
)

/* Source: https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?fontsize=14&module=/src/Example.tsx&file=/src/styles.css */
const variants = {
  enter: (direction) => {
    return {x: direction > 0 ? 1000 : -1000, opacity: 0, scale: 0.8}
  },
  center: {zIndex: 1, x: 0, opacity: 1, scale: 1},
  exit: (direction) => {
    return {zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0, scale: 0.8}
  }
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export const ShowcaseCarousel = ({children}) => {
  const [[page, direction], setPage] = useState([0, 0])
  const pageIndex = wrap(0, children.length, page)
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }
  return (
    <div className="relative z-20 flex flex-row mt-12 md:mt-16 -mx-2 sm:-mx-4 md:mx-0">
      <div className="w-4 flex place-items-center">
        <div className="w-full text-left">
          <button onClick={() => paginate(-1)} className="focus:outline-none text-teal-600 dark:text-teal-500 transition-all duration-300 transform hover:text-teal-500 dark:hover:text-teal-300 hover:scale-110">
            <svg className="h-6 fill-current" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
          </button>
        </div>
      </div>
      <div className="relative rounded-xl w-full h-96 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div className="absolute p-4 pb-6 w-full h-full cursor-grab active:cursor-grabbing"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {type: 'spring', stiffness: 300, damping: 30},
              opacity: {duration: 0.4}
            }}
            drag="x"
            dragConstraints={{left: 0, right: 0}}
            dragElastic={1}
            onDragEnd={(e, {offset, velocity}) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
          >
            <div className="block lg:hidden w-full h-full rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-warm-gray-250 to-warm-gray-300 dark:from-blue-gray-600 dark:to-blue-gray-700">
              {children[pageIndex]}
            </div>
            <Card className="w-full h-full">
              {children[pageIndex]}
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="w-4 text-right flex place-items-center">
        <div className="w-full text-right">
          <button onClick={() => paginate(1)} className="focus:outline-none text-teal-600 dark:text-teal-500 transition-all duration-300 transform hover:text-teal-500 dark:hover:text-teal-300 hover:scale-110">
            <svg className="h-6 fill-current" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  )
}


