import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect, withRouter } from 'react-router-dom'

class LoginPage extends Component {
  state = {
    userId: 'johndoe',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setAuthedUser(this.state.userId))
  }

  handleChange = (e) => {
    const userId = e.target.value
    this.setState({
      userId,
    })
  }

  render() {
    if (this.props.authedUser) {
      return <Redirect to={this.props.redirectTo} />
    }

    return (
      <div className="ui centered grid">
        <div className="eight wide column">
          <h2>Sign in</h2>
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="field">
              <label htmlFor="user-select">
                Choose account:
                <select
                  className="ui dropdown"
                  name="users"
                  id="user-select"
                  value={this.state.userId}
                  onChange={this.handleChange}
                >
                  {Object.keys(this.props.users).map((userId) => (
                    <option key={userId} value={userId}>
                      {this.props.users[userId].name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <button className="ui button">Sign in</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }, { location }) {
  return {
    authedUser,
    users,
    redirectTo: location.state.from.pathname,
  }
}

export default withRouter(connect(mapStateToProps)(LoginPage))
