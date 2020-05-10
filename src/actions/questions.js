import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'
export const REMOVE_QUESTION_ANSWER = 'REMOVE_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({ optionOneText, optionTwoText, author: authedUser })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestionAnswer({ qid, authedUser, answer }) {
  return {
    type: ADD_QUESTION_ANSWER,
    qid,
    authedUser,
    answer,
  }
}

function removeQuestionAnswer({ qid, authedUser }) {
  return {
    type: REMOVE_QUESTION_ANSWER,
    qid,
    authedUser,
  }
}

export function handleAddQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(addQuestionAnswer(info))
    return saveQuestionAnswer(info).catch((e) => {
      console.warn('Error in handleAddQuestionAnswer: ', e)
      dispatch(removeQuestionAnswer(info))
      alert('There was an error saving the question answer. Try again.')
    })
  }
}
