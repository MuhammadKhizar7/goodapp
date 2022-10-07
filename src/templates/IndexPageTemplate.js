import React from 'react'
import { Link } from 'gatsby'
import { SectionHeading } from '../components/Sections'
import { Container, CardSet } from '../components/Sections'
import Image from '../components/Image'

const IndexPageTemplate = ({ heading, subheading, image, news = [] }) => {
  return (
    <div>
      {/* Header */}
      <div className='flex flex-wrap max-h-[40rem] bg-blue-700 overflow-hidden pt-20'>
        <div className='sm:w-full md:w-1/2 md:pt-28 pb-20'>
          <div className='mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto lg:mx-0'>
              <h1 className='text-3xl font-bold text-white sm:text-4xl lg:text-7xl'>
                {heading}
              </h1>
              <p className='mt-4 text-blue-100 sm:mt-4 lg:mt-16 lg:text-2xl'>
                {subheading}
              </p>
            </div>
          </div>
        </div>
        <div className='sm:w-full md:w-1/2 mx-auto'>
          <Image
            className='h-56 w-full object-cover hidden sm:block sm:h-72 md:h-92 lg:w-full lg:h-full -mb-20'
            image={image}
            alt=''
          />
        </div>
      </div>

      {/* Featured news */}
      <Container className={''}>
        <div className='flex justify-between items-baseline'>
          <SectionHeading>Latest news</SectionHeading>
          <Link
            className='text-blue-700 underline hover:text-blue-800'
            to='/news'
          >
            View all
          </Link>
        </div>
        <div className='mt-8'>
          <CardSet className={''} posts={news} />
        </div>
      </Container>
    </div>
  )
}

export default IndexPageTemplate
