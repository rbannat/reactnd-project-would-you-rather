import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'

class HomePage extends Component {
  render() {
    return (
      <QuestionList
        answeredQuestions={this.props.answeredQuestions}
        unansweredQuestions={this.props.unansweredQuestions}
      />
    )
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  let answeredQuestions = []
  let unansweredQuestions = []
  Object.keys(questions).forEach((qid) => {
    const question = questions[qid]
    if (
      question.optionOne.votes.some((user) => user === authedUser) ||
      question.optionTwo.votes.some((user) => user === authedUser)
    ) {
      answeredQuestions.push({
        question: question,
        author: users[question.author],
      })
      return
    }
    unansweredQuestions.push({
      question: question,
      author: users[question.author],
    })
  })
  return {
    unansweredQuestions: unansweredQuestions.sort(sortQuestionsByTimestamp),
    answeredQuestions: answeredQuestions.sort(sortQuestionsByTimestamp),
  }
}

function sortQuestionsByTimestamp(a, b) {
  return b.question.timestamp - a.question.timestamp
}

export default connect(mapStateToProps)(HomePage)
