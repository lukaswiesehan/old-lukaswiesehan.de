import dynamic from 'next/dynamic'
import {isMobile} from 'react-device-detect'

const Tilt = dynamic(() => import('react-parallax-tilt'))

export const Card = ({className, children}) => {
  if(isMobile) {
    return (
      <div className={'lg:hidden rounded-xl overflow-hidden bg-warm-gray-300 dark:bg-blue-gray-700 ' + className}>
        {children}
      </div>
    )
  } else {
    return (
      <Tilt
        className={'hidden lg:block relative group rounded-xl transition-shadow duration-300 hover:shadow-lg overflow-hidden bg-warm-gray-300 dark:bg-blue-gray-700 ' + className}
        tiltMaxAngleX={4}
        tiltMaxAngleY={2}
        glareEnable={true}
        glareMaxOpacity={0.3}
      >
        <div className="absolute w-full h-full bg-gradient-to-br transition-opacity duration-300 from-warm-gray-250 to-warm-gray-300 dark:from-blue-gray-600 dark:to-blue-gray-700 opacity-0 group-hover:opacity-100"/>
        <div className="h-full">{children}</div>
      </Tilt>
    )
  }
}