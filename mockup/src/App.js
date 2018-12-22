import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './App.css'
import EnterInfo from './components/EnterInfo'
import Splash from './components/Splash'
import StartSearching from './components/StartSearching'
import Clarification from './components/Clarification'
import Closing from './components/Closing'
import EnterSearchInfo from './components/EnterSearchInfo'
import MatchedInfo from './components/MatchedInfo'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <>
          {/*https://xd.adobe.com/view/c029d25b-319f-4b3a-63b9-19ad7296cdf7-b618/*/}
          <ul>
            <li><Link to={`/`}>Splash </Link> </li>
            <li><Link to={`start`}> Start </Link></li>
            <li><Link to={`/enter_user_info`}> User Info </Link> </li>
            <li><Link to={`/enter_search_info`}> Search Info </Link> </li>
            <li><Link to={`/matches`}> Matches </Link> </li>
            <li><Link to={`/clarify`}> Clarification </Link> </li>
            <li><Link to={`/closing`}> Closing </Link> </li>
          </ul>
          

          <Route path="/" exact component={Splash} />
          <Route path="/start" component={StartSearching} />
          <Route path="/enter_user_info" component={EnterInfo} />
          <Route path="/enter_search_info" component={StartSearching} />
          <Route path="/matches" exact component={MatchedInfo} />
          <Route path="/clarify" exact component={Clarification} />
          <Route path="/closing" component={Closing} />
          </>
        </Router>
      </>
    )
  }
}

export default App
