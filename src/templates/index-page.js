import React from 'react'
import { graphql } from 'gatsby'
import MyHelmet from '../components/MyHelmet'
import Layout from '../components/Layout'

import IndexPageTemplate from './IndexPageTemplate'

const IndexPage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark
  // featured posts
  const { edges: player } = data.players
  const { edges: news } = data.news
  return (
    <Layout>
      <MyHelmet title={fm.title} description={fm.heading + fm.subheading} />
      <IndexPageTemplate
        heading={fm.heading}
        subheading={fm.subheading}
        image={fm.image}
        player={player}
        news={news}
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
        image {
          childImageSharp {
            gatsbyImageData(width: 1024, placeholder: BLURRED)
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
    players: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "player-page" }
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
