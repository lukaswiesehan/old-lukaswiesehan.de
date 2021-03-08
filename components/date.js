import {parseISO, format} from 'date-fns'
import {de} from 'date-fns/locale'

export const Date = ({dateString}) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'dd. LLLL yyyy', {locale: de})}</time>
}