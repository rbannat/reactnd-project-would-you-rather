import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function PrivateRoute({ children, authedUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authedUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(PrivateRoute)
