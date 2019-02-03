import React from 'react'
import classnames from 'classnames'

import withVisibility from '../HOC/withVisibility'

class Page extends React.Component {
  render() {

    return (
      <div className={classnames('row my-3 h-screen transition-fade', this.props.hasBeenVisible && 'transition-fade--active')}>
        { this.props.children }
      </div>
    )
  }
}

export default withVisibility(Page)