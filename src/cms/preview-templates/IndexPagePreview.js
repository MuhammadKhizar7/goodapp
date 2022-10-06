import React from 'react'
import IndexPageTemplate from '../../templates/IndexPageTemplate'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  data.image = getAsset(data.image)

  if (data) {
    return (
      <IndexPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        news={[]}
        image={data.image}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
