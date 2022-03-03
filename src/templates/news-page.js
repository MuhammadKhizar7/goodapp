import React from 'react'
import { graphql } from 'gatsby'
import MyHelmet from '../components/MyHelmet'
import NewsPageTemplate from './NewsPageTemplate'
import Layout from '../components/Layout'

const NewsPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter: fm } = post

  return (
    <Layout>
      <MyHelmet title={fm.title} description={fm.subheading} />
      <NewsPageTemplate
        heading={fm.heading}
        subheading={fm.subheading}
        html={post.html}
      />
    </Layout>
  )
}

export default NewsPage

export const newsPageQuery = graphql`
  query NewsPage($id: String!) {
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
