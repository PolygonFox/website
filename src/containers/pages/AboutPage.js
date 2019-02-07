import React from 'react'

import HeaderBlock from '../../components/blocks/HeaderBlock'
import ImageBlock from '../../components/blocks/ImageBlock'

export default class AboutPage extends React.Component {
  render() {
    return (
      <div class='container'>
        <ImageBlock />
        <HeaderBlock />
      </div>
    )
  }
}
