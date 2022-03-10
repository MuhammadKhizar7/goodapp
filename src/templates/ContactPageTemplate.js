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
      <div className='mx-1'>
        <div className='mapouter'>
          <div className='gmap_canvas'>
            <iframe
              className='w-full'
              height='500'
              id='gmap_canvas'
              src='https://maps.google.com/maps?q=387%20Katherine%20Road,%20Forest%20Gate%20London%20E7%208LT,%20United%20Kingdom&t=&z=13&ie=UTF8&iwloc=&output=embed'
              frameborder='0'
              scrolling='no'
              marginheight='0'
              marginwidth='0'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPageTemplate
