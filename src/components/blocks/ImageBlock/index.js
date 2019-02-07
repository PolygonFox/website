import React from 'react'

import './bundle'

export default class ImageBlock extends React.PureComponent {
  render() {

    return (
      <div class='row image-block'>
        <div class='col-md-12'>
            <div class='image-block__image'></div>
        </div>
      </div>
    )
  }
}
