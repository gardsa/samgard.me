import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { ReactNode } from 'react'
import GithubSVG from './svgs/github.svg'
import LinkedInSVG from './svgs/linkedin.svg'
import TwitterSVG from './svgs/twitter.svg'

const name = 'Sam Gard'
// eslint-disable-next-line quotes
const blurb = "Hi, I'm Sam"
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
    <div className='flex flex-col justify-between items-center h-[calc(100vh-4rem)] px-4 my-3 mx-auto xs:h-[calc(100vh-6rem)] xs:my-6 sm:h-[calc(100vh-9rem)] xs:mb-12 md:px-8 lg:px-16 max-w-7xl'>
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
      <header className='flex flex-col items-center justify-between w-full mb-2 xs:mb-3 md:mb-6'>
        <nav className='flex flex-col sm:flex-row items-center justify-between w-full mb-8 md:mb-4'>
          <Link className='headerHeadingLink' href='/'>
            <h1 className='heading2Xl'>{name}</h1>
          </Link>
          <ul className='flex justify-center pl-0 list-none'>
            <li>
              <Link className='headerNavLink' href='/portfolio'>
                Portfolio
              </Link>
            </li>
            <li>
              <Link className='headerNavLink' href='/articles'>
                Articles
              </Link>
            </li>
            <li>
              <Link
                className='headerNavLink'
                href='/sam-gard-resume.pdf'
                target='_blank'
              >
                Resume
              </Link>
            </li>
            <li>
              <Link className='headerNavLink' href='mailto:hello@samgard.me'>
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
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
            <h2 className='headingLg !mb-0'>{blurb}</h2>
            <h3 className='headingMd !mt-0'>{role}</h3>
          </>
        ) : null}
      </header>
      <main>{children}</main>
      <footer className='pt-16 pb-8'>
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
        <p className='text-xs text-center mt-8'>
          © {new Date().getFullYear()} Sam Gard.
        </p>
      </footer>
    </div>
  )
}
