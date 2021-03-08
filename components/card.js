import Tilt from 'react-parallax-tilt'

export const Card = ({className, children}) => (
  <Tilt 
    className={'relative group rounded-xl transition-shadow duration-300 hover:shadow-lg overflow-hidden bg-warm-gray-300 dark:bg-blue-gray-700 ' + className}
    tiltMaxAngleX={4}
    tiltMaxAngleY={2}
    glareEnable={true}
    glareMaxOpacity={0.3}
  >
    <div className="absolute w-full h-full bg-gradient-to-br transition-opacity duration-300 from-warm-gray-250 to-warm-gray-300 dark:from-blue-gray-600 dark:to-blue-gray-700 opacity-0 group-hover:opacity-100"/>
    <div className="h-full">{children}</div>
  </Tilt>
)