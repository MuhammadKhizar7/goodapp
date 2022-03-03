import React from 'react'
import { graphql } from 'gatsby'
import MyHelmet from '../components/MyHelmet'
import CourtLawPageTemplate from './CourtLawPageTemplate'
import Layout from '../components/Layout'

const BooksPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter: fm } = post

  return (
    <Layout>
      <MyHelmet title={fm.title} description={fm.subheading} />
      <CourtLawPageTemplate
        heading={fm.heading}
        subheading={fm.subheading}
        html={post.html}
      />
    </Layout>
  )
}

export default BooksPage

export const booksPageQuery = graphql`
  query BooksPage($id: String!) {
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
