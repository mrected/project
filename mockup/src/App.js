import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './Reset.css'
import './App.css'


import Splash from './components/Splash'
import Login from './components/LogIn'
import EnterInfo from './components/EnterInfo'
import SearchInfo from './components/SearchInfo'
import MatchedInfo from './components/MatchedInfo'
import Clarification from './components/Clarification'
import Closing from './components/Closing'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <>
          {/*https://xd.adobe.com/view/c029d25b-319f-4b3a-63b9-19ad7296cdf7-b618/*/}
          <Route path="/" exact component={Splash} />
          <Route path="/login" component={Login} />
          <Route path="/enter_info" component={EnterInfo} />
          <Route path="/search_info" component={SearchInfo} />
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
