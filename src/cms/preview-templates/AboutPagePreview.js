import React from 'react'
import AboutPageTemplate from '../../templates/AboutPageTemplate'
import { marked } from 'marked'

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const html = marked(data.body)

  if (data) {
    return (
      <AboutPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        html={html}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default AboutPagePreview
