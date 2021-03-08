import {getShowcaseIds, getShowcase} from '../../lib/showcase'
import Head from 'next/head'
import {Date} from '../../components/date'
import {PageLayout} from '../../components/pageLayout'

export async function getStaticProps({params}) {
  const showcase = await getShowcase(params.id)
  return {
    props: {
      showcase
    }
  }
}

export async function getStaticPaths() {
  const paths = getShowcaseIds()
  return {
    paths,
    fallback: false
  }
}

export default function Showcase({showcase}) {
  return (
    <PageLayout>
      <Head>
        <title>{showcase.title}</title>
      </Head>
      <article>
        <h1>{showcase.title}</h1>
        <div>
          <Date dateString={showcase.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: showcase.contentHtml }} />
      </article>
    </PageLayout>
  )
}