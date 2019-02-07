import React from 'react'

import './bundle'

export default class HeaderBlock extends React.PureComponent {

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