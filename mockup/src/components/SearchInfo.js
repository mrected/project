import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/main-logo.svg'

class SearchInfo extends Component {
  render() {
    return (
      <>
        <div className="container enter-info">
        <img src={logo} className="main-logo" alt="logo" />
        <p>enter any information about who you're looking for</p>
          <form>
          <label>their first name: </label><input type="text" name="search-first-name" size="20"  /><br />
          <label>their last name: </label><input type="text" name="search-last-name" size="20"  /><br />
          <div className="gender-radio">
          <label>their gender: </label>
            <label className="small-label" for="m">male</label>
            <input type="radio" name="search-gender" value="m" id="m"></input>
            <label className="small-label" for="f">female</label>
            <input type="radio" name="search-gender" value="f" id="f"></input><br />
          </div>
          <label for="search-dob">dob: </label><input id="search-dob" type="date" name="search-dob" /><br />
          <label for="state">state they were born in: </label><select id="state">
            <option value="Birth State">- choose one -</option>
            <option value="search-Alabama">Alabama</option>
            <option value="search-Alaska">Alaska</option>
            <option value="search-Arizona">Arizona</option>
            <option value="search-Arkansas">Arkansas</option>
            <option value="search-California">California</option>
            <option value="search-Colorado">Colorado</option>
            <option value="search-Connecticut">Connecticut</option>
            <option value="search-Delaware">Delaware</option>
            <option value="search-Florida">Florida</option>
            <option value="search-Georgia">Georgia</option>
            <option value="search-Hawaii">Hawaii</option>
            <option value="search-Idaho">Idaho</option>
            <option value="search-Illinois">Illinois</option>
            <option value="search-Indiana">Ind</option>
            <option value="search-Iowa">Iowa</option>
            <option value="search-Kansas">Kansas</option>
            <option value="search-Kentucky">Kentucky</option>
            <option value="search-Louisiana">Louisiana</option>
            <option value="search-Maine">Maine</option>
            <option value="search-Maryland">Maryland</option>
            <option value="search-Massachusetts">Massachusetts</option>
            <option value="search-Michigan">Michigan</option>
            <option value="search-Minnesota">Minnesota</option>
            <option value="search-Mississippi">Mississippi</option>
            <option value="search-Missouri">Missouri</option>
            <option value="search-Montana">Montana</option>
            <option value="search-Nebraska">Nebraska</option>
            <option value="search-Nevada">Nevada</option>
            <option value="search-New Hampshire">New Hampshire</option>
            <option value="search-New Jersey">New Jersey</option>
            <option value="search-New Mexico">New Mexico</option>
            <option value="search-New York">New York</option>
            <option value="search-North Carolina">North Carolina</option>
            <option value="search-North Dakota">North Dakota</option>
            <option value="search-Ohio">Ohio</option>
            <option value="search-Oklahoma">Oklahoma</option>
            <option value="search-Oregon">Oregon</option>
            <option value="search-Pennsylvania">Pennsylvania</option>
            <option value="search-Rhode Island">Rhode Island</option>
            <option value="search-South Carolina">South Carolina</option>
            <option value="search-South Dakota">South Dakota</option>
            <option value="search-Tennessee">Tennessee</option>
            <option value="search-Texas">Texas</option>
            <option value="search-Utah">Utah</option>
            <option value="search-Vermont">Vermont</option>
            <option value="search-Virginia">Virginia</option>
            <option value="search-Washington">Washington</option>
            <option value="search-West Virginia">West Virginia</option>
            <option value="search-Wisconsin">Wisconsin</option>
            <option value="search-Wyoming">Wyoming</option>
          </select><br />
          <label>last year you saw them: </label><input type="number" min="1900" max="2018" name="search-last-year" size="4" /><br />
          <label>last place you saw them: </label><input type="text" name="search-last-place" size="15" /><br />
          <label for="user-relation">you are this persons: </label><select id="relation">
            <option>- choose one -</option>
            <option value="mother">mother</option>
            <option value="father">father</option>
            <option value="brother">brother</option>
            <option value="mother">sister</option>
            <option value="mother">friend</option>
            <option value="mother">other - family member</option>
            <option value="mother">other - not related</option>
          </select><br />
          <label for="search-relation">they are your: </label><select id="relation">
            <option>- choose one -</option>
            <option value="mother">mother</option>
            <option value="father">father</option>
            <option value="brother">brother</option>
            <option value="mother">sister</option>
            <option value="mother">friend</option>
            <option value="mother">other - family member</option>
            <option value="mother">other - not related</option>
          </select><br />
          <label for="reason">reason for separation: </label><select id="reason">
            <option>- choose one -</option>
            <option value="parent-divorced">parents divorced</option>
            <option value="divorce">you divorced</option>
            <option value="adoption">adoption</option>
            <option value="parent-divorced">relocated</option>
            <option value="parent-divorced">unknown/other</option>
          </select><br />
          <label>their mothers first name: </label><input type="text" name="search-mothers-first" size="15" /><br />
          <label>their mothers last name: </label><input type="text" name="search-mothers-last" size="15" /><br />
          <label>their fathers first name: </label><input type="text" name="search-fathers-first" size="15" /><br />
          <label>their fathers last name: </label><input type="text" name="search-fathers-last" size="15" /><br />
          </form>
          <nav>
            <Link to={`enter_info`} className="small-btn"> &lt;- back</Link>
            <Link to={`matches`} className="small-btn">next -&gt;</Link>
          </nav>
        </div>
      </>
    )
  }
}

export default SearchInfo
