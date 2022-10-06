import React from 'react'
import PlayersPageTemplate from '../../templates/PlayersPageTemplate'

const PlayersPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <PlayersPageTemplate
        heading={data.heading}
        subheading={data.subheading}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default PlayersPagePreview
