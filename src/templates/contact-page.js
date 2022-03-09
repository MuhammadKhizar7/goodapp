import React from 'react'
import { graphql } from 'gatsby'
import MyHelmet from '../components/MyHelmet'
import ContactPageTemplate from './ContactPageTemplate'
import Layout from '../components/Layout'

function ContactPage({ data }) {
  const fm = data.markdownRemark.frontmatter
  return (
    <Layout>
      <MyHelmet title={fm.title} description={fm.subheading} />
      <ContactPageTemplate
        heading={fm.heading}
        subheading={fm.subheading}
        office={fm.office}
      />
    </Layout>
  )
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        subheading
        office {
          tagline
          location
          address
          phone
          image {
            childImageSharp {
              gatsbyImageData(width: 640, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
