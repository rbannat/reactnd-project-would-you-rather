import { SET_INITIAL_DATA_LOADED } from '../actions/shared'

export default function initialDataLoaded(state = false, action) {
  switch (action.type) {
    case SET_INITIAL_DATA_LOADED:
      return action.loaded
    default:
      return state
  }
}
