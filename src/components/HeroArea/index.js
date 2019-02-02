import React from 'react'
import { ArrowDownCircle } from 'react-feather';

import './style.scss'

export default class HeroArea extends React.Component {
  render() {
    return <div className='hero-area'>
      <button onClick={this._scrollDown} className='hero-area__scroll-down'><ArrowDownCircle /></button>
    </div>
  }

  _scrollDown = () => {
    $('html, body').animate({
      scrollTop: window.innerHeight
    }, 1000)
  }
}
