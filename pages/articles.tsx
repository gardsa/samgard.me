import fsPromises from 'fs/promises'
import Head from 'next/head'
import path from 'path'

import Card from 'components/Card'
import Layout, { siteTitle } from 'components/Layout'
import { PortfolioItem } from 'types'

export default function Articles({
  articlesData
}: {
  articlesData: PortfolioItem[]
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h2 className='headingLg mb-8'>Articles</h2>
      <section className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {articlesData?.map(ad => {
          // TODO: only show key information here
          // display full information on dynamic routes based on object slug
          return <Card key={ad.slug} {...ad} />
          // return (
          //   <div key={ad.slug}>
          //     <a href={ad.link} target='_blank' rel='noreferrer'>
          //       <h3>{ad.title}</h3>
          //     </a>
          //     <p>{ad.date}</p>
          //     <Image src={ad.image} alt='' width='320' height='179' />
          //     <ReactMarkdown>{ad.description}</ReactMarkdown>
          //     <h4>Key skills:</h4>
          //     <ul>
          //       {ad.skills.map((skill: string) => (
          //         <li key={skill}>{skill}</li>
          //       ))}
          //     </ul>
          //   </div>
          // )
        })}
      </section>
    </Layout>
  )
}

// Fetching articles data from the JSON file
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'articles.json')
    const jsonData = await fsPromises.readFile(filePath)
    const articlesData = JSON.parse(jsonData.toString())
  
    return {
      props: { articlesData }
    }
  }
