import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class EnterInfoInstruction extends Component {
  render() {
    return (
      <>
        <div className="container clarification">
        <img src={logo} className="main-logo" alt="logo" />
        <h1>your information</h1>
        <p>
            Over the next 2 screens you'll enter your personal information. 
            We'll use this information to search thru our database and compare 
            it to other users search criteria to see if there's any matches.
        </p>
        <p>
            Please fill out every field that applies to you. The more information you enter, the more accurate match we can make.
        </p>

          <nav className="footer-nav">
            <Link to={`exit`} className="small-btn">not yet</Link>
            <Link to={`enter_info1`} className="small-btn">ok -&gt;</Link>
          </nav>
        </div>
      </>
    )
  }
}

export default EnterInfoInstruction
