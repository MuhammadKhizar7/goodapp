import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'

function IntroductionPageTemplate({ heading, subheading, html }) {
  return (
    <>
      <Header heading={heading} subheading={subheading} />
      <Content className={''} html={html} />
    </>
  )
}

export default IntroductionPageTemplate
