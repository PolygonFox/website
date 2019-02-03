import React from 'react'

import { IconContext } from "react-icons";
import MainNavigation from '../../components/navigation/MainNavigation'
import HeroArea from '../../components/HeroArea'
import Section from '../../components/common/Section'


export default class App extends React.Component {
  render() {
    return <div>
      <MainNavigation />
      <HeroArea />

    </div>
  }
}
