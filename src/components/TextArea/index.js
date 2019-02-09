import React from 'react'

import './style.scss'

export default class TextArea extends React.PureComponent {

  state = {
    targetElement: null
  }

  constructor(props) {
    super(props)

    this.ref = React.createRef()
  }

  componentDidMount() {
    $('h2, p').click(e => {
      this._setTargetElement($(e.target))
    })
  }

  render() {
    return (
      <textarea ref={this.ref} style={{ display: 'none' }} class='textarea' />
    )
  }

  _setTargetElement(element) {
    const $element = $(element)
    const $textarea = $(this.ref.current)

    // Remove all event listeners from textarea
    $textarea.off()

    this.setState({
      targetElement: $element
    })

    // Retreive element styling
    const elementOffset = $element.offset()

    const elementStyling = {
      lineHeight: $element.css('line-height'),
      fontSize: $element.css('font-size'),
      fontFamily: $element.css('font-family'),
      fontWeight: $element.css('font-weight'),
      textAlign: $element.css('text-align'),
      padding: $element.css('padding'),
      border: $element.css('border')
    }

    // Apply element styling to the text area
    $textarea.css({
      // Dimensions
      width: $element.width(),
      height: $element.height(),

      // Position
      top: elementOffset.top,
      left: elementOffset.left,

      // Font
      ...elementStyling
    })

    console.log('eleemtn', $element.text())

    // Copy the text
    $textarea.val($element.html())
    $element.text('')

    // Add event listeners
    $textarea.blur(() => {
      // Update element text on blur and hide textarea
      $textarea.hide()
      $element.text($textarea.val())
      $textarea.val('')
    })

    // Make the user focus the text area
    $textarea.show()
    $textarea.focus()
  }
}