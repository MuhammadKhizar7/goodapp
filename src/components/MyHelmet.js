import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

function MyHelmet({ title, description }) {
  const { site } = useStaticQuery(
    graphql`
      query SITE_Name_QUERY {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `
  )
  return (
    <Helmet>
      {title ? (
        <title>
          {title} | {site.siteMetadata.siteName}
        </title>
      ) : null}
      {description ? <meta name='description' content={description} /> : null}
    </Helmet>
  )
}

export default MyHelmet
