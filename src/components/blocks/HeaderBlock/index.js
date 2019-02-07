import React from 'react'

import bundle from './bundle'

export default class HeaderBlock extends React.PureComponent {

  componentDidMount() {
    // Run the bundle
    bundle()
  }

  render() {
    return (
      <div class='row header-block'>
        <div class='col-md-6'>
          <h2>Header</h2>
        </div>
         <div class='col-md-6'>
          <h2>Header</h2>
        </div>
      </div>
    )
  }
}