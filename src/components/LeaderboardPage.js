import React, { Component } from 'react'
import { connect } from 'react-redux'
import Score from './Score'

class LeaderboardPage extends Component {
  render() {
    return (
      <div>
        <h2>Leaderboard</h2>
        {this.props.usersByScore.map((user, index) => (
          <Score
            key={user.id}
            rank={index + 1}
            userName={user.name}
            userAvatarURL={user.avatarURL}
            answeredQuestionsCount={user.answeredQuestionsCount}
            createdQuestionsCount={user.createdQuestionsCount}
            score={user.score()}
          />
        ))}
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    usersByScore: Object.keys(users)
      .map((userId) => {
        return {
          ...users[userId],
          answeredQuestionsCount: Object.keys(users[userId].answers).length,
          createdQuestionsCount: users[userId].questions.length,
          score: function getScore() {
            return this.answeredQuestionsCount + this.createdQuestionsCount
          },
        }
      })
      .sort((a, b) => b.score() - a.score()),
  }
}

export default connect(mapStateToProps)(LeaderboardPage)
