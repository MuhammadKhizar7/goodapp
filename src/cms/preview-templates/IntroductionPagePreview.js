import React from 'react'
import IntroductionPageTemplate from '../../templates/IntroductionPageTemplate'
import { marked } from 'marked'

const IntroductionPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log('data', data)
  // render markdown for cms preview
  // @ts-ignore
  const html = marked(data.body)

  if (data) {
    return (
      <IntroductionPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        html={html}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IntroductionPagePreview
