import fsPromises from 'fs/promises'
import path from 'path'

import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

// TODO: convert to Typescript

export default function Portfolio({ portfolioData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h2>Portfolio</h2>
      {/* TODO: update to use Tailwind */}
      <section className='grid'>
        {portfolioData?.map(pd => {
          // TODO: obtain, store and display images

          // TODO: only show key information here
          // display full information on dynamic routes based on object sluh
          return (
            <div key={pd.slug}>
              <a href={pd.link} target='_blank'>
                <h3>{pd.title}</h3>
              </a>
              <p>{pd.date}</p>
              {/* TODO: parse markdown */}
              <p>{pd.description}</p>
              <ul>
                {pd.skills.map(skill => (
                  <li>{skill}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

// Fetching portfolio data from the JSON file
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json')
  const jsonData = await fsPromises.readFile(filePath)
  const portfolioData = JSON.parse(jsonData)

  return {
    props: { portfolioData },
  }
}