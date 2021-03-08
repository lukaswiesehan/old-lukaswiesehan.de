import NextLink from 'next/link'

export const Link = ({href, children}) => (
  <NextLink href={href}>
    <span className="font-bold cursor-pointer transition-all duration-200 hover:text-teal-600 dark:hover:text-teal-500">
      <span className="text-teal-600 dark:text-teal-500 mr-2"><i className="fas fa-long-arrow-alt-right"></i></span>
      {children}
    </span> 
  </NextLink>
)