import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class Exit extends Component {
  render() {
    return (
      <>
        <div className="container clarification">
            <img src={logo} className="main-logo" alt="logo" />
            <h1>no problem</h1>
            <p>
                It's a big step. Don't rush things. <br />Feel free to close the app and come back whenever you want to start searching again.
            </p>

          <nav className="main-footer">
            
          </nav>
        </div>
      </>
    )
  }
}

export default Exit
