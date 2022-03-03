import React from 'react'
import Image from '../components/Image'
import Content from '../components/Content'
import Header from '../components/Header'
import { Container } from '../components/Sections'

function NewsPageTemplate({ title, image, body }) {
  return (
    <>
      <Header heading={title} subheading={''} />
      <Container className='text-center -mt-24 sm:-mt-28 lg:-mt-36'>
        <Image className='rounded-md' image={image.image} alt={image.alt} />
      </Container>
      <Content html={body} className='-mt-20' />
    </>
  )
}

export default NewsPageTemplate
