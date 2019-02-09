import React from 'react'

import bundle from './bundle'

export default class FooterBlock extends React.PureComponent {

  // Run the bunde
  componentDidMount() {
    bundle()
  }

  render() {
    return (
      <div class='row footer-block'>
        <div class='col-md-4'>
          <div class='footer-block__item'>
            <h2>Footer</h2>
          </div>
        </div>
         <div class='col-md-4'>
          <div class='footer-block__item'>
            <h2>Footer</h2>
          </div>
        </div>
        <div class='col-md-4'>
          <div class='footer-block__item'>
            <h2 contenteditable="true">Footer</h2>
            <p>Lorem ipsum lala <br />Lorem</p>
          </div>
        </div>
      </div>
    )
  }
}