import React from 'react'
const Score = ({
  rank,
  score,
  userName,
  userAvatarURL,
  answeredQuestionsCount,
  createdQuestionsCount,
}) => {
  return (
    <div className="ui segment">
      <div className="ui grid">
        <div className="ui center aligned middle aligned one wide column">
          <div>
            <span>
              <strong>{rank}.</strong>
            </span>
          </div>
        </div>
        <div className="ui center aligned four wide column">
          <div>
            <img
              className="ui circular small image"
              src={userAvatarURL}
              alt={userName}
            />
          </div>
        </div>
        <div className="ui seven wide column">
          <div>
            <h2>{userName}</h2>
            <div>
              <div>Answered questions: {answeredQuestionsCount}</div>
            </div>
            <div>
              <div>Created questions: {createdQuestionsCount}</div>
            </div>
          </div>
        </div>
        <div className="ui center aligned four wide column">
          <div>
            <h3>Score</h3>
            <p>
              <strong>{score}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Score
