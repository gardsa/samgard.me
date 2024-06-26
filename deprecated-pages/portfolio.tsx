import fsPromises from 'fs/promises'
import Head from 'next/head'
import path from 'path'

import Card from 'components/Card'
import Layout, { siteTitle } from 'components/Layout'
import { PortfolioItem } from 'types'

export default function Portfolio({
  portfolioData
}: {
  portfolioData: PortfolioItem[]
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h2 className='headingLg mb-8'>Portfolio</h2>
      <section className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {portfolioData?.map(pd => {
          // TODO: only show key information here
          // display full information on dynamic routes based on object slug
          return <Card key={pd.slug} {...pd} />
          // return (
          //   <div key={pd.slug}>
          //     <a href={pd.link} target='_blank' rel='noreferrer'>
          //       <h3>{pd.title}</h3>
          //     </a>
          //     <p>{pd.date}</p>
          //     <Image src={pd.image} alt='' width='320' height='179' />
          //     <ReactMarkdown>{pd.description}</ReactMarkdown>
          //     <h4>Key skills:</h4>
          //     <ul>
          //       {pd.skills.map((skill: string) => (
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

// Fetching portfolio data from the JSON file
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'portfolio.json')
  const jsonData = await fsPromises.readFile(filePath)
  const portfolioData = JSON.parse(jsonData.toString())

  return {
    props: { portfolioData }
  }
}
