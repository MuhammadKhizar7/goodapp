import React from 'react'
import BooksPageTemplate from '../../templates/BooksPageTemplate'

const BooksPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <BooksPageTemplate heading={data.heading} subheading={data.subheading} />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default BooksPagePreview
