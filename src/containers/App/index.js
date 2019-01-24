import React from 'react'

import MainNavigation from '../../components/navigation/MainNavigation'
import HeroArea from '../../components/HeroArea'


export default class App extends React.Component {
  render() {
    return <div>
      <MainNavigation />
      <HeroArea />

      <div className='container'>
        <div className='row my-1'>
          <div className='col-12'>
            <h1>Welcome</h1>
            <h2>Welcome</h2>
          </div>
        </div>
      </div>

    </div>
  }
}
