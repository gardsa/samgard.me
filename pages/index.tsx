import Head from 'next/head'

import Layout, { siteTitle } from 'components/Layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='text-center max-w-2xl'>
        <p>
          I am a creative and resourceful front-end developer with over six
          years of experience building production-grade applications in complex
          environments. I have a keen eye for detail and a pragmatic
          problem-solving approach. I’m passionate about delivering performant
          solutions that meet stakeholder requirements, delight users, and are
          easily maintainable. I seek to continually improve my workflow, guide
          and collaborate with team members, advocate for the end user, and
          bridge the gap between UI/UX design and code implementation.
        </p>
        {/* <p className='headingMd my-5'>
          View my <Link href='/portfolio'>portfolio</Link>
        </p>
        <p>
          In the meantime, feel free to contact me at{' '}
          <a href='mailto:hello@samgard.me'>hello@samgard.me</a> or check out my{' '}
          <a href='/sam-gard-resume.pdf'>resume</a>.
        </p> */}
      </section>
    </Layout>
  )
}
