import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import HomePage from './HomePage'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import PrivateRoute from './PrivateRoute'
import LoginPage from './LoginPage.js'
import QuestionDetailsPage from './QuestionDetailsPage.js'
import NewQuestionPage from './NewQuestionPage.js'
import LeaderboardPage from './LeaderboardPage.js'
import NoMatch from './NoMatch.js'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <LoadingBar />
        <Nav />
        {this.props.initialDataLoaded === false ? null : (
          <div className="ui container">
            <Switch>
              <Route path="/login" exact>
                <LoginPage />
              </Route>
              <PrivateRoute path="/" exact>
                {<HomePage />}
              </PrivateRoute>
              <PrivateRoute path="/question/:id" exact>
                <QuestionDetailsPage />
              </PrivateRoute>
              <PrivateRoute path="/add" exact>
                {<NewQuestionPage />}
              </PrivateRoute>
              <PrivateRoute path="/leaderboard" exact>
                <LeaderboardPage />
              </PrivateRoute>
              <Route path="*">{<NoMatch />}</Route>
            </Switch>
          </div>
        )}
      </Router>
    )
  }
}

function mapStateToProps({ initialDataLoaded }) {
  return {
    initialDataLoaded,
  }
}

export default connect(mapStateToProps)(App)
