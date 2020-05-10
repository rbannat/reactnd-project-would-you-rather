import React, { useState } from 'react'
import Question from './Question'

const QuestionList = ({ answeredQuestions, unansweredQuestions }) => {
  const [activeTab, setActiveTab] = useState('unanswered')
  const tabs = (
    <div className="ui top attached tabular menu">
      <button
        type="button"
        className={`item ${activeTab === 'unanswered' ? 'active' : ''}`}
        data-tab="first"
        onClick={() => setActiveTab('unanswered')}
      >
        Unanswered Questions
      </button>
      <button
        type="button"
        className={`item ${activeTab === 'answered' ? 'active' : ''}`}
        data-tab="second"
        onClick={() => setActiveTab('answered')}
      >
        Answered Questions
      </button>
    </div>
  )
  const unansweredQuestionsContent = (
    <div
      className={`ui bottom attached tab segment ${
        activeTab === 'unanswered' ? 'active' : ''
      }`}
      data-tab="first"
    >
      {unansweredQuestions.length
        ? unansweredQuestions.map(({ question, author }) => (
            <Question
              key={question.id}
              question={question}
              author={author}
              showPreview={true}
            />
          ))
        : 'Great! There are no unanswered questions.'}
    </div>
  )
  const answeredQuestionsContent = (
    <div
      className={`ui bottom attached tab segment  ${
        activeTab === 'answered' ? 'active' : ''
      }`}
      data-tab="second"
    >
      {answeredQuestions.map(({ question, author }) => (
        <Question
          key={question.id}
          question={question}
          author={author}
          showPreview={true}
        />
      ))}
    </div>
  )
  return (
    <div>
      {tabs}
      {unansweredQuestionsContent}
      {answeredQuestionsContent}
    </div>
  )
}

export default QuestionList
