import React from 'react'
import { graphql } from 'gatsby'
import MyHelmet from '../components/MyHelmet'
import CourtLawTemplate from './CourtLawPageTemplate'
import Layout from '../components/Layout'

const CourtLawPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter: fm } = post

  return (
    <Layout>
      <MyHelmet title={fm.title} description={fm.subheading} />
      <CourtLawTemplate
        heading={fm.heading}
        subheading={fm.subheading}
        html={post.html}
      />
    </Layout>
  )
}

export default CourtLawPage

export const courtLawPageQuery = graphql`
  query CourtLawPage($id: String!) {
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
