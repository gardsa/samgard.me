import Head from 'next/head'
import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sam Gard - Blog</title>
      </Head>
      <h1>Blog</h1>
      <p>Watch this space...</p>
    </Layout>
  )
}
