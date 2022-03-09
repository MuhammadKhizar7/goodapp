import React from 'react'
import Header from '../components/Header'
import { TextImageSplit, SectionHeading } from '../components/Sections'

function ContactPageTemplate({ heading, subheading, office }) {
  return (
    <div>
      <Header heading={heading} subheading={subheading} />
      <TextImageSplit image={office.image} imageLeft={true}>
        <p className='text-green-700 font-semibold tracking-wide'>
          {office.tagline}
        </p>
        <SectionHeading>{office.location}</SectionHeading>
        <div className='mt-6 sm:flex sm:flex-row text-gray-500'>
          <div
            className='sm:w-1/2 whitespace-pre-line'
            dangerouslySetInnerHTML={{ __html: office.address }}
          />
          <div
            className='mt-6 sm:mt-0 sm:w-1/2 whitespace-pre-line'
            dangerouslySetInnerHTML={{ __html: office.phone }}
          />
        </div>
      </TextImageSplit>
    </div>
  )
}

export default ContactPageTemplate
