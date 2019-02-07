import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import './style.scss'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'

class App extends React.Component {

  state = {
    navigationActive: false,
    keyboardEventListener: undefined
  }

  componentDidMount() {
    this.setState({
      keyboardEventListener: document.addEventListener('keyup', (e) => (e.keyCode ? e.keyCode : e.which) === 36 && this._toggleNavigation())
    })
  }

  componentWillUnmount() {
    if (this.state.keyboardEventListener) {
      document.removeEventListener(this.state.keyboardEventListener)
    }
  }

  render() {
    return <BrowserRouter>
     <div class='app'>
        <div class='app__navigation-container'>
          { this.state.navigationActive && 
            <ul class='app__navigation'>
              <li class='app__navigation__item'><Link class='app__navigation__link' to='/'>Home</Link></li>
              <li class='app__navigation__item'><Link class='app__navigation__link' to='/about'>About</Link></li>
            </ul>
          }
        </div>

        <Switch>
          <Route exact path={`/`} component={HomePage}/>
          <Route path={`/about`} component={AboutPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  }

  _toggleNavigation = () => {
    this.setState({
      navigationActive: !this.state.navigationActive
    })
  }
}

export default hot(App)
