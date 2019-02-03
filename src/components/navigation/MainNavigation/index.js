import React from 'react'
import classnames from 'classnames'

import './style.scss'

export default class MainNavigation extends React.Component {

  state = {
    hasScrolled: false
  }

  componentWillMount() {
    window.addEventListener('scroll', this._scrollCheck)
    this._scrollCheck()

    this.animationIn = React.createRef()
    this.animationOut = React.createRef()
  }

  render() {
    return <nav>
      <div className={classnames('main-navigation', this.state.hasScrolled && 'has-scrolled')}>
        <h1 className='site-name'>PolygonFox</h1>
      </div>
    </nav>
  }
  
  _scrollCheck = () => {
    const currentScrollPosition = window.scrollY
    const currentHasScrolledState = this.state.hasScrolled
    if(currentHasScrolledState === false && currentScrollPosition > 0) {
      // this.animationIn.current.beginElement()
      this.setState({
        hasScrolled: true
      })
    } else if(currentHasScrolledState === true && currentScrollPosition === 0) {
      // this.animationOut.current.beginElement()
      this.setState({
        hasScrolled: false
      })
    }
  }
}
