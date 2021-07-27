import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.centerText}>
        <p className={utilStyles.headingMd}>Hi, I'm Sam!</p>
        <p>I'm a front-end developer working in Wellington NZ.</p>
        <p>
          I'll be building out this site over time, with a blog and some personal
          projects.
        </p>
        <p>
          In the meantime, find me at{' '}
          <a href='mailto:hello@samgard.me'>hello@samgard.me</a>, or via the social media
          links below.
        </p>
      </section>
    </Layout>
  )
}
