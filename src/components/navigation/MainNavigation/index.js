import React from 'react'

import './style.scss'

export default class MainNavigation extends React.Component {
  render() {
    return <nav>
      <div className='main-navigation'>
        <a className='main-navigation__link main-navigation__link--left' href='#'>Skills</a>
        <h1 className='site-name'>PolygonFox</h1>
        <a className='main-navigation__link main-navigation__link--right' href='#'>Art</a>
      </div>
    </nav>
  }
}
