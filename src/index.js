import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'

// Include global styling
import './style/index.scss'

const targetElement = document.getElementById('root')

ReactDOM.render(<App />, targetElement)