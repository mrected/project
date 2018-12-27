import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './Reset.css'
import './App.css'


import Splash from './components/Splash'
import Login from './components/LogIn'
import EnterInfo1 from './components/EnterInfo1'
import EnterInfo2 from './components/EnterInfo2'
import SearchInfo1 from './components/SearchInfo1'
import SearchInfo2 from './components/SearchInfo2'
import SearchInfo3 from './components/SearchInfo3'
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
          <Route path="/enter_info1" component={EnterInfo1} />
          <Route path="/enter_info2" component={EnterInfo2} />
          <Route path="/search_info1" component={SearchInfo1} />
          <Route path="/search_info2" component={SearchInfo2} />
          <Route path="/search_info3" component={SearchInfo3} />
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
