import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class Closing extends Component {
  render() {
    return (
      <>
        <div className="container closing">
        <img src={logo} className="main-logo" alt="logo" />
        <p>michaela has been sent a message with your information.</p>
        <p>if she thinks you're the person she's looking for, she will have the option to send a message to the email you listed, we will notify you that your search has ended and your information will be removed from our database.</p>
        <p>if she doesn't recognize you, we'll let you know and save your search criteria to use in the event the right person does a search for you.</p>
        <p>thank you for using lok8r and good luck!</p>
          
          <nav className="main-footer">
            <Link to={`/`} className="small-btn"> close </Link>
          </nav>
        </div>
      </>
    )
  }
}

export default Closing
