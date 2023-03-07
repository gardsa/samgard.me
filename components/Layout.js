import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import GithubSVG from '../components/github.svg'
import LinkedInSVG from '../components/linkedin.svg'
import TwitterSVG from '../components/twitter.svg'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Sam Gard'
const role = 'Senior Front-End Developer'
export const siteTitle = 'Sam Gard - Senior Front-End Developer'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        {/* TODO: come up with better description later */}
        <meta name='description' content={siteTitle} />
        <meta property='og:image' content='https://www.samgard.me/images/profile.jpg' />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src='/images/profile.jpg'
              className={utilStyles.borderCircle}
              height={180}
              width={180}
              alt={name}
            />
            <h1
              className={utilStyles.heading2Xl}
              style={{ marginTop: '2rem', marginBottom: '0' }}
            >
              {name}
            </h1>
            <h2
              className={`${utilStyles.headingLg} ${utilStyles.headingOrange}`}
              style={{ marginTop: '0' }}
            >
              {role}
            </h2>
          </>
        ) : (
          <>
            <Link href='/'>
              <Image
                priority
                src='/images/profile.jpg'
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link className={utilStyles.colorInherit} href='/'>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>← Back to home</Link>
        </div>
      )}
      <footer className={styles.footer}>
        <nav>
          <ul>
            <li>
              <a className={styles.footerLink} href='https://github.com/gardsa/'>
                <GithubSVG />
              </a>
            </li>
            <li>
              <a
                className={styles.footerLink}
                href='https://www.linkedin.com/in/sam-gard-nz/'
              >
                <LinkedInSVG />
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href='https://twitter.com/_ohmagard'>
                <TwitterSVG />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}
