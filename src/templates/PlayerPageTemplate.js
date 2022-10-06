import React from 'react'
import Image from '../components/Image'
import Content from '../components/Content'
import { Container } from '../components/Sections'
import { ProjectHeader } from '../components/Header'

function PlayerPageTemplate({ title, image, date, body }) {
  return (
    <>
      <ProjectHeader heading={title} date={date} />
      <Container className='text-center -mt-24 sm:-mt-28 lg:-mt-36'>
        <Image className='rounded-md' image={image.image} alt={image.alt} />
      </Container>
      <Content html={body} className='-mt-20' />
    </>
  )
}

export default PlayerPageTemplate
