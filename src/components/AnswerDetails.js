import React from 'react'
import './AnswerDetails.css'

const AnswerDetails = ({ optionText, voteCount, totalVotes, mark }) => {
  const optionPercent = Math.floor((voteCount / totalVotes) * 100)
  return (
    <div className="answer-details">
      <p>{optionText}</p>
      {mark && (
        <div className="your-vote">
          <span>Your vote</span>
        </div>
      )}
      <div className="ui progress" data-percent={optionPercent}>
        <div
          className="bar"
          style={{ width: `${optionPercent}%`, minWidth: 0 }}
        >
          <div className="progress">{`${optionPercent}%`}</div>
        </div>
        <div className="label">{`${voteCount} out of ${totalVotes} votes`}</div>
      </div>
    </div>
  )
}

export default AnswerDetails
