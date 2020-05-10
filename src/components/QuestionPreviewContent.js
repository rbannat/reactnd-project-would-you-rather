import React from 'react'
import { NavLink } from 'react-router-dom'

const QuestionPreviewContent = ({
  questionId,
  optionOneText,
  optionTwoText,
}) => (
  <div>
    <p>{optionOneText}</p>
    <div className="ui horizontal divider">Or</div>
    <p>{optionTwoText}</p>
    <NavLink to={`question/${questionId}`} className="ui right floated button">
      View Poll
    </NavLink>
  </div>
)

export default QuestionPreviewContent
