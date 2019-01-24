import React from 'react'

import MainNavigation from '../../components/navigation/MainNavigation'
import HeroArea from '../../components/HeroArea'


export default class App extends React.Component {
  render() {
    return <div>
      <MainNavigation />
      <HeroArea />

      <div className='container'>
        <div className='row my-3 h100'>
          <div className='col-12'>
            <h2>Introduction</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare condimentum elit eget lacinia. Ut lectus dolor, luctus ut molestie id, aliquam non dolor. Nam purus tellus, viverra a venenatis a, tempus at velit. Suspendisse sed augue lorem. Proin ut est erat. Aliquam quis fringilla nisi. Praesent orci velit, fermentum venenatis placerat a, semper quis dolor. Suspendisse ac lectus odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer imperdiet enim a placerat tempus. Nam ultrices, justo eget mattis pharetra, lacus odio laoreet ipsum, nec pellentesque odio orci suscipit neque. Mauris accumsan sed velit ac faucibus. Pellentesque id felis non dolor dignissim ullamcorper id eu ligula. Donec sed sem ac erat venenatis euismod.</p>
            <p>Nam est sem, fermentum sit amet ultrices ut, vehicula quis tellus. Nulla dignissim sagittis augue iaculis vulputate. Aliquam efficitur volutpat risus scelerisque vestibulum. Maecenas vulputate aliquet lectus ut varius. Mauris quam lorem, egestas sagittis orci suscipit, tempus auctor diam. Aliquam nec nunc vel turpis mollis consequat eu eget eros. Vestibulum finibus mi erat, ut ultricies libero bibendum a. Fusce ultricies est at mattis rutrum. Donec facilisis tortor vel sagittis pretium. Sed volutpat neque at ullamcorper euismod. Cras rhoncus sagittis consectetur. Nam eget purus ut enim elementum dapibus. Nam laoreet facilisis tristique.</p>
          </div>
        </div>
        <div className='row my-3 h100'>
          <div className='col-12'>
            <h2>Skills</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare condimentum elit eget lacinia. Ut lectus dolor, luctus ut molestie id, aliquam non dolor. Nam purus tellus, viverra a venenatis a, tempus at velit. Suspendisse sed augue lorem. Proin ut est erat. Aliquam quis fringilla nisi. Praesent orci velit, fermentum venenatis placerat a, semper quis dolor. Suspendisse ac lectus odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer imperdiet enim a placerat tempus. Nam ultrices, justo eget mattis pharetra, lacus odio laoreet ipsum, nec pellentesque odio orci suscipit neque. Mauris accumsan sed velit ac faucibus. Pellentesque id felis non dolor dignissim ullamcorper id eu ligula. Donec sed sem ac erat venenatis euismod.</p>
            <p>Nam est sem, fermentum sit amet ultrices ut, vehicula quis tellus. Nulla dignissim sagittis augue iaculis vulputate. Aliquam efficitur volutpat risus scelerisque vestibulum. Maecenas vulputate aliquet lectus ut varius. Mauris quam lorem, egestas sagittis orci suscipit, tempus auctor diam. Aliquam nec nunc vel turpis mollis consequat eu eget eros. Vestibulum finibus mi erat, ut ultricies libero bibendum a. Fusce ultricies est at mattis rutrum. Donec facilisis tortor vel sagittis pretium. Sed volutpat neque at ullamcorper euismod. Cras rhoncus sagittis consectetur. Nam eget purus ut enim elementum dapibus. Nam laoreet facilisis tristique.</p>
          </div>
        </div>

        <div className='row my-3 h100'>
          <div className='col-12'>
            <h2 id="portfolio">Portfolio</h2>
            <h2>Welcome</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare condimentum elit eget lacinia. Ut lectus dolor, luctus ut molestie id, aliquam non dolor. Nam purus tellus, viverra a venenatis a, tempus at velit. Suspendisse sed augue lorem. Proin ut est erat. Aliquam quis fringilla nisi. Praesent orci velit, fermentum venenatis placerat a, semper quis dolor. Suspendisse ac lectus odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer imperdiet enim a placerat tempus. Nam ultrices, justo eget mattis pharetra, lacus odio laoreet ipsum, nec pellentesque odio orci suscipit neque. Mauris accumsan sed velit ac faucibus. Pellentesque id felis non dolor dignissim ullamcorper id eu ligula. Donec sed sem ac erat venenatis euismod.</p>
            <p>Nam est sem, fermentum sit amet ultrices ut, vehicula quis tellus. Nulla dignissim sagittis augue iaculis vulputate. Aliquam efficitur volutpat risus scelerisque vestibulum. Maecenas vulputate aliquet lectus ut varius. Mauris quam lorem, egestas sagittis orci suscipit, tempus auctor diam. Aliquam nec nunc vel turpis mollis consequat eu eget eros. Vestibulum finibus mi erat, ut ultricies libero bibendum a. Fusce ultricies est at mattis rutrum. Donec facilisis tortor vel sagittis pretium. Sed volutpat neque at ullamcorper euismod. Cras rhoncus sagittis consectetur. Nam eget purus ut enim elementum dapibus. Nam laoreet facilisis tristique.</p>
          </div>
        </div>
      </div>
    </div>
  }
}
