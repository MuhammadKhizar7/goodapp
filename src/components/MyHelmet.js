import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

function MyHelmet({ title, description }) {
  const { site } = useStaticQuery(
    graphql`
      query SITE_Name_QUERY {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Helmet>
      {title ? (
        <title>
          {title} | {site.siteMetadata.title}
        </title>
      ) : null}
      {description ? <meta name='description' content={description} /> : null}
    </Helmet>
  )
}

export default MyHelmet
