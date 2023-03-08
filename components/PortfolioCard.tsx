import { PortfolioItem } from 'types'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Image from 'next/image'

export default function PortfolioCard({
  title,
  date,
  link,
  description,
  // skills,
  image
}: PortfolioItem) {
  return (
    <div className='portfolioCard'>
      <Link
        className='!no-underline'
        href={link}
        target='_blank'
        rel='noreferrer'
      >
        <div className='relative aspect-[2560/1432] max-w-sm overflow-hidden'>
          <Image
            className='absolute top-0 bottom-0 right-0 left-0 m-auto rounded-t-lg'
            src={image}
            alt=''
            width={2560}
            height={1432}
          />
        </div>
        <div className='h-auto px-6 pt-6 pb-16'>
          <h3 className='headingMd font-bold !mb-0'>{title}</h3>
          <p className='text-xs text-gray-500 mb-4'>{date}</p>
          <ReactMarkdown className='text-offBlack text-sm mb-3 font-normal'>
            {description}
          </ReactMarkdown>
          <Link
            href='#'
            className='absolute bottom-6 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pomegranate-500 rounded-lg hover:bg-pomegranate-700 focus:ring-4 focus:outline-none focus:ring-pomegranate-300 '
          >
            Read more
            <svg
              aria-hidden='true'
              className='w-4 h-4 ml-2 -mr-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </Link>
        </div>
      </Link>
    </div>
  )
}
