import React from 'react'

import HeaderBlock from '../../components/blocks/HeaderBlock'
import ImageBlock from '../../components/blocks/ImageBlock'

export default class HomePage extends React.Component {
  render() {
    return <div className='container'>
      <HeaderBlock />
      <ImageBlock />
    </div>
  }
}
