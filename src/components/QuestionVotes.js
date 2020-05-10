import React from 'react'
import AnswerDetails from './AnswerDetails'

const QuestionVotes = ({ optionOne, optionTwo, userAnswer }) => {
  const optionOneCount = optionOne.votes.length
  const optionTwoCount = optionTwo.votes.length
  const totalVotes = optionOneCount + optionTwoCount
  return (
    <>
      <h2>Results</h2>
      <AnswerDetails
        optionText={`...${optionOne.text}`}
        voteCount={optionOneCount}
        totalVotes={totalVotes}
        mark={userAnswer === 'optionOne'}
      />
      <AnswerDetails
        optionText={`...${optionTwo.text}`}
        voteCount={optionTwoCount}
        totalVotes={totalVotes}
        mark={userAnswer === 'optionTwo'}
      />
    </>
  )
}

export default QuestionVotes
