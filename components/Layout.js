import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from 'styles/utils.module.css'
import Link from 'next/link'

const name = 'Sam Gard'
const role = 'Front-End Developer'
export const siteTitle = 'Sam Gard - Front-End Developer'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
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
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <h2 className={`${utilStyles.headingLg} ${utilStyles.headingOrange}`}>
              {role}
            </h2>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  priority
                  src='/images/profile.jpg'
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
