import React from 'react'
import { connect } from 'react-redux'
import QuestionPreviewContent from './QuestionPreviewContent'
import QuestionVoteForm from './QuestionVoteForm'
import QuestionVotes from './QuestionVotes'

const Question = ({ question, author, showPreview, authedUser }) => {
  const userAnswer = question.optionOne.votes.some(
    (user) => user === authedUser
  )
    ? 'optionOne'
    : question.optionTwo.votes.some((user) => user === authedUser)
    ? 'optionTwo'
    : null
  const optionOneText = `...${question.optionOne.text}`
  const optionTwoText = `...${question.optionTwo.text}`
  return (
    <div className="ui fluid card">
      <div className="content">
        <div className="header">Would you rather ...</div>
        <div className="metadata">asked by {author.name}</div>
      </div>
      <div className="content">
        <div className="ui two column grid">
          <div className="six wide column">
            <img
              className="ui circular small image"
              src={author.avatarURL}
              alt={author.name}
            />
          </div>
          <div className="middle aligned ten wide column">
            {showPreview ? (
              <QuestionPreviewContent
                questionId={question.id}
                optionOneText={optionOneText}
                optionTwoText={optionTwoText}
              />
            ) : !userAnswer ? (
              <QuestionVoteForm
                qid={question.id}
                authedUser={authedUser}
                optionOneText={optionOneText}
                optionTwoText={optionTwoText}
              />
            ) : (
              <QuestionVotes
                optionOne={question.optionOne}
                optionTwo={question.optionTwo}
                userAnswer={userAnswer}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  }
}
export default connect(mapStateToProps)(Question)
