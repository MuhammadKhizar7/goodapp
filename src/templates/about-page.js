import React from 'react'
import { graphql } from 'gatsby'
import MyHelmet from '../components/MyHelmet'
import AboutPageTemplate from './AboutPageTemplate'
import Layout from '../components/Layout'

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter: fm } = post

  return (
    <Layout>
      <MyHelmet title={fm.title} description={fm.subheading} />
      <AboutPageTemplate
        heading={fm.heading}
        subheading={fm.subheading}
        html={post.html}
      />
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
