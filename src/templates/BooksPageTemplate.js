import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import { Container, SectionHeading } from '../components/Sections'

function BooksPageTemplate({ heading, subheading, html }) {
  return (
    <>
      <Header heading={heading} subheading={subheading} />
      <Content className={''} html={html} />
      <Container className={''}>
        <div className='max-w-3xl mx-auto'>
          <SectionHeading>Our team</SectionHeading>
        </div>
      </Container>
    </>
  )
}

export default BooksPageTemplate
