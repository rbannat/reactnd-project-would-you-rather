import React from 'react'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
const Nav = ({ dispatch, loggedInUser }) => {
  const handleLogout = (e) => {
    dispatch(setAuthedUser(null))
  }

  return (
    <div className="ui container" style={{ marginBottom: '25px' }}>
      <div className="ui large secondary menu">
        <NavLink to="/" exact className="item" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/add" className="item" activeClassName="active">
          New Question
        </NavLink>
        <NavLink to="/leaderboard" className="item" activeClassName="active">
          Leaderboard
        </NavLink>

        {loggedInUser && (
          <div className="right menu">
            <div className="item">
              <img
                className="ui avatar image"
                src={loggedInUser.avatarURL}
                alt={loggedInUser.name}
              />
              <span>{loggedInUser.name}</span>
            </div>
            <div className="item">
              <button
                type="button"
                className="ui button basic"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
function mapStateToProps({ authedUser, users }) {
  return {
    loggedInUser: users[authedUser],
  }
}
export default connect(mapStateToProps)(Nav)
