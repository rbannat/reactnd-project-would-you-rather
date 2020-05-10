import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export const SET_INITIAL_DATA_LOADED = 'SET_INITIAL_DATA_LOADED'

function setInitialDataLoaded(loaded) {
  return {
    type: SET_INITIAL_DATA_LOADED,
    loaded,
  }
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(setInitialDataLoaded(true))
      dispatch(hideLoading())
    })
  }
}
