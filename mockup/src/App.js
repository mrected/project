import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
          {/*https://xd.adobe.com/view/c029d25b-319f-4b3a-63b9-19ad7296cdf7-b618/*/}
          <Link to={`${match.url}/splash`}>Splash</Link> />
          <EnterInfo />
          <StartSearching />
          <EnterSearchInfo />
          <MatchedInfo />
          <Clarification />
          <Closing />
        </Router>
      </>
    )
  }
}

export default App
