import React from 'react'
import { graphql } from 'gatsby'
import MyHelmet from '../components/MyHelmet'
import Layout from '../components/Layout'

import IndexPageTemplate from './IndexPageTemplate'

const IndexPage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark

  // featured posts
  const { edges: posts } = data.posts
  const { edges: books } = data.books
  const { edges: news } = data.news
  return (
    <Layout>
      <MyHelmet title={fm.title} description={fm.introduction.description} />
      <IndexPageTemplate
        heading={fm.heading}
        subheading={fm.subheading}
        posts={posts}
        books={books}
        news={news}
        introduction={fm.introduction}
      />
    </Layout>
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        subheading
        introduction {
          description
          heading
          image {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 1024, placeholder: BLURRED)
              }
            }
          }
          button {
            label
            url
          }
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-page" }
          featured: { eq: true }
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredimage {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 640
                    placeholder: BLURRED
                    aspectRatio: 1.5
                  )
                }
              }
            }
          }
        }
      }
    }
    news: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "news-page" }
          featured: { eq: true }
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredimage {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 640
                    placeholder: BLURRED
                    aspectRatio: 1.5
                  )
                }
              }
            }
          }
        }
      }
    }
    books: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "book-page" }
          featured: { eq: true }
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            featuredimage {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 640
                    placeholder: BLURRED
                    aspectRatio: 1.5
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
