export const Subtitle = ({text, emoji}) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <p>{text}<span className="ml-2">{emoji}</span></p>
    </div>
    <div className="flex-grow ml-4 mt-3 border-t-2 border-warm-gray-400 dark:border-cool-gray-600"></div>
  </div>
)

export const Title = ({children, order}) => {
  if(order == 1) {
    return (<h1 className="text-5xl md:text-4xl lg:text-5xl font-bold text-teal-600 dark:text-teal-500">{children}</h1>)
  } else {
    return (<h2 className="text-5xl md:text-4xl lg:text-5xl font-bold text-teal-600 dark:text-teal-500">{children}</h2>)
  }
}

export const HeadingSection = ({subtitle, emoji, title, order, children}) => (
  <div>
    <Subtitle text={subtitle} emoji={emoji}></Subtitle>
    <div className="md:flex mt-4">
      <div className="flex-shrink-0">
        <Title order={order}>{title}</Title>
      </div>
      <div className="md:ml-12 lg:ml-20 mt-10 md:mt-0">
        {children}
      </div>
    </div>
  </div>
)