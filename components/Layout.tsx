import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import GithubSVG from './svgs/github.svg'
import LinkedInSVG from './svgs/linkedin.svg'
import TwitterSVG from './svgs/twitter.svg'
import { ReactNode } from 'react'

const name = 'Sam Gard'
const role = 'Senior Front-End Developer'
export const siteTitle = 'Sam Gard - Senior Front-End Developer'

export default function Layout({
  children,
  home
}: {
  children: ReactNode
  home?: boolean
}) {
  return (
    <div className='flex flex-col justify-between items-center max-w-xl h-[calc(100vh-4rem)] px-4 my-8 mx-auto xs:h-[calc(100vh-6rem)] xs:my-12 sm:h-[calc(100vh-9rem)] xs:mb-24'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        {/* TODO: come up with better description later */}
        <meta name='description' content={siteTitle} />
        <meta
          property='og:image'
          content='https://www.samgard.me/images/profile.png'
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className='flex flex-col items-center'>
        {home ? (
          <>
            <Image
              priority
              src='/images/profile.png'
              className='borderCircle'
              height={180}
              width={180}
              alt={name}
            />
            <h1 className='heading2Xl !mt-8 !mb-0'>{name}</h1>
            <h2 className='headingLg text-orange font-bold !mt-0'>{role}</h2>
          </>
        ) : (
          <>
            <Link href='/'>
              <Image
                priority
                src='/images/profile.png'
                className='borderCircle'
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className='headingLg'>
              <Link className='text-inherit' href='/'>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className='mt-12'>
          <Link href='/'>← Back to home</Link>
        </div>
      )}
      <footer>
        <nav>
          <ul className='flex justify-center pl-0 list-none'>
            <li>
              <a href='https://github.com/gardsa/'>
                <GithubSVG className='footerSvgLink ' />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/sam-gard-nz/'>
                <LinkedInSVG className='footerSvgLink ' />
              </a>
            </li>
            <li>
              <a href='https://twitter.com/_ohmagard'>
                <TwitterSVG className='footerSvgLink ' />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}
