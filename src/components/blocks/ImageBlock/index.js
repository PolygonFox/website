import React from 'react'

import bundle from './bundle'

export default class ImageBlock extends React.PureComponent {

  componentDidMount() {
    // Run the bundle
    bundle()
  }

  render() {
    return (
      <div class='row image-block'>
        <div class='col col-md-12'>
            <div class='image-block__image'></div>
        </div>
      </div>
    )
  }
}
