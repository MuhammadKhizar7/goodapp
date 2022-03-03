import React from 'react'
import NewsListPageTemplate from '../../templates/NewsListPageTemplate'

const NewsListPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <NewsListPageTemplate
        heading={data.heading}
        subheading={data.subheading}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default NewsListPagePreview
