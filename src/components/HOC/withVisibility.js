import React from 'react'
import ReactDOM from "react-dom";

export default function withVisibility(WrappedComponent) {

  return class extends React.Component {
    state = {
      isVisible: false,
      hasBeenVisible: false,
      listener: null
    }

    constructor(props) {
      super(props)

      this.ref = React.createRef()
    }

    componentDidMount() {

      this.setState({
        listener: window.addEventListener('scroll', this._handleScroll)
      })

      this._handleScroll()
    }

    componentWillUnmount() {
      const { listener } = this.state

      if (listener) {
        window.removeEventListener(listener)
      }
    }

    render() {
      return <WrappedComponent ref={this.ref} isVisible={this.state.isVisible} hasBeenVisible={this.state.hasBeenVisible} {...this.props} />;
    }

    _handleScroll = () => {
      const element = ReactDOM.findDOMNode(this.ref.current)
      const isInViewport = this._isElementInViewport(element);

      this.setState({
        isVisible: isInViewport,
        hasBeenVisible: this.state.hasBeenVisible || isInViewport
      })
    }

    _isElementInViewport = (element) => {
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;

    }
  }
}