import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_FOOTER_QUERY {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <footer>
      <div>
        <p className='text-center'>
          © {site.siteMetadata.title} {new Date().getFullYear()} - All rights
          reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
