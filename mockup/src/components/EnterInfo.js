import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class EnterInfo extends Component {
  render() {
    return (
      <>
        <div className="container enter-info">
        <img src={logo} className="main-logo" alt="logo" />
        <p>enter your information</p>
          <form>
          <label>your first name: </label><input type="text" name="user-first-name" size="20" required /><br />
          <label>nickname/alias: </label><input type="text" name="user-nickname" size="20" /><br />
          <label>your last name: </label><input type="text" name="user-last-name" size="20" required /><br />
          <div className="gender-radio">
          <label>your gender: </label>
            <label className="small-label" for="m">male</label>
            <input type="radio" name="user-gender" value="m" id="m"></input>
            <label className="small-label" for="f">female</label>
            <input type="radio" name="user-gender" value="f" id="f"></input><br />
          </div>
          <label for="user-dob">dob: </label><input id="user-dob" type="date" name="user-dob" /><br />
          <label for="state">state you were born in: </label><select id="state">
            <option value="Birth State">- choose one -</option>
            <option value="user-Alabama">Alabama</option>
            <option value="user-Alaska">Alaska</option>
            <option value="user-Arizona">Arizona</option>
            <option value="user-Arkansas">Arkansas</option>
            <option value="user-California">California</option>
            <option value="user-Colorado">Colorado</option>
            <option value="user-Connecticut">Connecticut</option>
            <option value="user-Delaware">Delaware</option>
            <option value="user-Florida">Florida</option>
            <option value="user-Georgia">Georgia</option>
            <option value="user-Hawaii">Hawaii</option>
            <option value="user-Idaho">Idaho</option>
            <option value="user-Illinois">Illinois</option>
            <option value="user-Indiana">Ind</option>
            <option value="user-Iowa">Iowa</option>
            <option value="user-Kansas">Kansas</option>
            <option value="user-Kentucky">Kentucky</option>
            <option value="user-Louisiana">Louisiana</option>
            <option value="user-Maine">Maine</option>
            <option value="user-Maryland">Maryland</option>
            <option value="user-Massachusetts">Massachusetts</option>
            <option value="user-Michigan">Michigan</option>
            <option value="user-Minnesota">Minnesota</option>
            <option value="user-Mississippi">Mississippi</option>
            <option value="user-Missouri">Missouri</option>
            <option value="user-Montana">Montana</option>
            <option value="user-Nebraska">Nebraska</option>
            <option value="user-Nevada">Nevada</option>
            <option value="user-New Hampshire">New Hampshire</option>
            <option value="user-New Jersey">New Jersey</option>
            <option value="user-New Mexico">New Mexico</option>
            <option value="user-New York">New York</option>
            <option value="user-North Carolina">North Carolina</option>
            <option value="user-North Dakota">North Dakota</option>
            <option value="user-Ohio">Ohio</option>
            <option value="user-Oklahoma">Oklahoma</option>
            <option value="user-Oregon">Oregon</option>
            <option value="user-Pennsylvania">Pennsylvania</option>
            <option value="user-Rhode Island">Rhode Island</option>
            <option value="user-South Carolina">South Carolina</option>
            <option value="user-South Dakota">South Dakota</option>
            <option value="user-Tennessee">Tennessee</option>
            <option value="user-Texas">Texas</option>
            <option value="user-Utah">Utah</option>
            <option value="user-Vermont">Vermont</option>
            <option value="user-Virginia">Virginia</option>
            <option value="user-Washington">Washington</option>
            <option value="user-West Virginia">West Virginia</option>
            <option value="user-Wisconsin">Wisconsin</option>
            <option value="user-Wyoming">Wyoming</option>
          </select><br />
          <label>your mothers first name: </label><input type="text" name="user-mothers-first" size="15" /><br />
          <label>your mothers last name: </label><input type="text" name="user-mothers-last" size="15" /><br />
          <label>your fathers first name: </label><input type="text" name="user-fathers-first" size="15" /><br />
          <label>your fathers last name: </label><input type="text" name="user-fathers-last" size="15" /><br />
          </form>
          <nav className="main-footer">
            <Link to={`search_info`} className="small-btn">next -&gt;</Link>
          </nav>
        </div>
      </>
    )
  }
}

export default EnterInfo
