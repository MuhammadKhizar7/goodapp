import React from 'react'
import { graphql } from 'gatsby'
import MyHelmet from '../components/MyHelmet'
import IntroductionPageTemplate from './IntroductionPageTemplate'
import Layout from '../components/Layout'

const IntroductionPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter: fm } = post

  return (
    <Layout>
      <MyHelmet title={fm.title} description={fm.subheading} />
      <IntroductionPageTemplate
        heading={fm.heading}
        subheading={fm.subheading}
        html={post.html}
      />
    </Layout>
  )
}

export default IntroductionPage

export const introductionPageQuery = graphql`
  query IntroductionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`
