import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ADD_QUESTION_ANSWER,
  REMOVE_QUESTION_ANSWER,
} from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      }
    case ADD_QUESTION_ANSWER:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.some(
              (user) => user === action.authedUser
            )
              ? state[action.qid][action.answer].votes
              : [...state[action.qid][action.answer].votes, action.authedUser],
          },
        },
      }
    case REMOVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          optionOne: {
            ...state[action.id].optionOne,
            votes: state[action.id].optionOne.votes.filter(
              (user) => user !== action.authedUser
            ),
          },
          optionTwo: {
            ...state[action.id].optionTwo,
            votes: state[action.id].optionTwo.votes.filter(
              (user) => user !== action.authedUser
            ),
          },
        },
      }
    default:
      return state
  }
}
