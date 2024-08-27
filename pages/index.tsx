import Head from 'next/head'

import Layout, { siteTitle } from 'components/Layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='text-center max-w-4xl'>
        <p>
          I am a creative and resourceful developer who strives to deliver performant, user-friendly, and maintainable solutions that meet stakeholder requirements and align with best practices. I enjoy collaborating with cross-functional teams, mentoring junior and intermediate developers, and bridging the gap between UI/UX design and code implementation.
        </p>
        <br/>
        <p>
          With over seven years of experience as a front-end developer, I have successfully delivered a range of web applications for various clients and sectors, from government agencies to education providers. I am currently building and maintaining components as part of the design system at Thinkific in Vancouver BC, where we&apos;re focusing on creating well-documented, accessible, and mature components that can be used across our entire suite of products.
        </p>
      </section>
    </Layout>
  )
}
