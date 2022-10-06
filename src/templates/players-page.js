import React from 'react'
import { graphql } from 'gatsby'
import MyHelmet from '../components/MyHelmet'
import PlayersPageTemplate from './PlayersPageTemplate'
import Layout from '../components/Layout'

const PlayersPage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <MyHelmet title={fm.title} description={fm.subheading} />
      <PlayersPageTemplate
        heading={fm.heading}
        subheading={fm.subheading}
        posts={posts}
      />
    </Layout>
  )
}

export default PlayersPage

export const PlayersPageQuery = graphql`
  query PlayersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        subheading
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "player-page" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            location
            featuredimage {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 640
                    placeholder: BLURRED
                    aspectRatio: 1.5
                    transformOptions: { fit: COVER, cropFocus: CENTER }
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
