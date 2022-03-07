import React from 'react'
import IndexPageTemplate from '../../templates/IndexPageTemplate'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  data.introduction.image.image = getAsset(data.introduction.image.image)

  if (data) {
    return (
      <IndexPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        posts={[]}
        books={[]}
        news={[]}
        introduction={data.introduction}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
