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
          With over seven years of experience as a front-end developer, I have successfully delivered a range of web applications for various clients and sectors, from government agencies to education providers. I am currently leading a team of front-end developers at LCI Education, where I am responsible for maintaining a WCAG 2.1-compliant component library and implementing a DXCP solution using MACH architecture principles.
        </p>
        <br/>
        <p>
          I am a creative and resourceful developer who strives to deliver performant, user-friendly, and maintainable solutions that meet stakeholder requirements and align with best practices. I enjoy collaborating with cross-functional teams, mentoring junior and intermediate developers, and bridging the gap between UI/UX design and code implementation. I am passionate about learning new technologies and frameworks, and sharing my knowledge and insights with others.
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
