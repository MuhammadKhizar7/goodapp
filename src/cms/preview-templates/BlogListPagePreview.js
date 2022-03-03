import React from 'react'
import BlogListPageTemplate from '../../templates/BlogListPageTemplate'

const BlogListPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <BlogListPageTemplate
        heading={data.heading}
        subheading={data.subheading}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default BlogListPagePreview
