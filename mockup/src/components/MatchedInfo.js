import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class MatchedInfo extends Component {
  render() {
    return (
      <>
        <div className="container matches">
        <img src={logo} className="main-logo" alt="logo" />
        <p>these people match your search criteria</p>

        <Link to={`clarify`} className="big-btn">
          Kayla M. <br />
          Age 24
        </Link>

        <Link to={`clarify`} className="big-btn">
          <p>Jane D.</p>
          <p>Age 24</p>
        </Link>
        <Link to={`clarify`} className="big-btn">
          <p>Janet D.</p>
          <p>Age 24</p>
        </Link>
        <Link to={`clarify`} className="big-btn">
          <p>Janet D.</p>
          <p>Age 24</p>
        </Link>
          
          <nav className="main-footer">
            <Link to={`search_info3`} className="small-btn"> &lt;- back</Link>
            <Link to={`clarify`} className="small-btn">next -&gt;</Link>
          </nav>
        </div>
      </>
    )
  }
}

export default MatchedInfo
