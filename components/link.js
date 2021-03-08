import NextLink from 'next/link'

export const Link = ({href, children}) => (
  <NextLink href={href}>
    <span className="font-bold cursor-pointer transition-all duration-200 hover:text-teal-600 dark:hover:text-teal-500">
      <span className="text-teal-600 dark:text-teal-500">
        <svg className="inline h-6 mb-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
      {children}
    </span> 
  </NextLink>
)