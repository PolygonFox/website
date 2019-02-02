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
        <a className='main-navigation__link main-navigation__link--left' href='#portfolio'><span>Portfolio</span></a>
        <h1 className='site-name'>PolygonFox</h1>
        <a className='main-navigation__link main-navigation__link--right' href='#contact'><span>Contact</span></a>
        <svg  viewBox='0 0 100 100'>
          <polygon className="square" points="0 50, 50 0, 100 50, 50 100">
            <animate ref={this.animationIn} attributeName="points" dur="200ms" to="0 50, 50 0, 100 50, 50 50" begin="none"  fill="freeze" />
            <animate ref={this.animationOut} attributeName="points" dur="200ms" to="0 50, 50 0, 100 50, 50 100" begin="none"  fill="freeze" />
          </polygon>
        </svg>
      </div>
    </nav>
  }
  
  _scrollCheck = () => {
    const currentScrollPosition = window.scrollY
    const currentHasScrolledState = this.state.hasScrolled
    if(currentHasScrolledState === false && currentScrollPosition > 0) {
      this.animationIn.current.beginElement()
      this.setState({
        hasScrolled: true
      })
    } else if(currentHasScrolledState === true && currentScrollPosition === 0) {
      this.animationOut.current.beginElement()
      this.setState({
        hasScrolled: false
      })
    }
  }
}
