import React, { Component } from 'react'
import logo from '../images/main-logo.svg'

class Splash extends Component {
  render() {
    return (
      <>
        <div className="container splash">
          <img src={logo} className="main-logo" alt="logo" />
        </div>
      </>
    )
  }
}

export default Splash
