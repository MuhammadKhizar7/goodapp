import React from 'react'
import CourtLawPageTemplate from '../../templates/CourtLawPageTemplate'
import { marked } from 'marked'

const CourtLawPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log('data', data)
  // render markdown for cms preview
  // @ts-ignore
  const html = marked(data.body)

  if (data) {
    return (
      <CourtLawPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        html={html}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default CourtLawPagePreview
