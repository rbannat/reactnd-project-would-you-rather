import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Question from './Question'
import NoMatch from './NoMatch'

class QuestionDetailsPage extends Component {
  render() {
    return !this.props.question ? (
      <NoMatch />
    ) : (
      <>
        <h2>Question Details</h2>
        <Question question={this.props.question} author={this.props.author} />
      </>
    )
  }
}

function mapStateToProps({ questions, users }, props) {
  const { id } = props.match.params
  const question = questions[id]
  return !question
    ? {}
    : {
        question,
        author: users[questions[id].author],
      }
}

export default withRouter(connect(mapStateToProps)(QuestionDetailsPage))
