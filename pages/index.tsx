import Head from 'next/head'
import Layout, { siteTitle } from 'components/Layout'

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className='text-center'>
				<p className='headingMd my-5'>Portfolio coming soon!</p>
				<p>
          In the meantime, feel free to contact me at{' '}
					<a href='mailto:hello@samgard.me'>hello@samgard.me</a> or check out my{' '}
					<a href='/sam-gard-resume.pdf'>resume</a>.
				</p>
			</section>
		</Layout>
	)
}
