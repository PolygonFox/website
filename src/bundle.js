// Include global styling
import './style/index.scss'

// Include block styling
import HeaderBlockBundle from './components/blocks/HeaderBlock/bundle'
import ImageBlockBundle from './components/blocks/ImageBlock/bundle'
import ImageBlockBundle from './components/blocks/FooterBlock/bundle'

$( document ).ready(function() {

  // Implement block scripts
  HeaderBlockBundle()
  ImageBlockBundle()
  FooterBlock()
});
