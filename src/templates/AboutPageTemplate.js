import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'

function AboutPageTemplate({ heading, subheading, html }) {
  return (
    <>
      <Header heading={heading} subheading={subheading} />
      <Content html={html} />
    </>
  )
}

export default AboutPageTemplate
