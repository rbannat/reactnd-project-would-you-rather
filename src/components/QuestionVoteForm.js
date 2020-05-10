import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestionAnswer } from '../actions/questions'

class QuestionVoteForm extends Component {
  state = {
    selectedAnswer: 'optionOne',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, qid, authedUser } = this.props
    dispatch(
      handleAddQuestionAnswer({
        qid,
        answer: this.state.selectedAnswer,
        authedUser,
      })
    )
  }

  handleChange = (e) => {
    const target = e.target
    const selectedAnswer = target.checked && target.id
    this.setState({
      selectedAnswer,
    })
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="grouped fields">
          <h2>Would you rather...</h2>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                id="optionOne"
                name="answer"
                checked={this.state.selectedAnswer === 'optionOne'}
                onChange={this.handleChange}
              />
              <label htmlFor="optionOne">{this.props.optionOneText}</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                id="optionTwo"
                name="answer"
                onChange={this.handleChange}
                checked={this.state.selectedAnswer === 'optionTwo'}
              />
              <label htmlFor="optionTwo">{this.props.optionTwoText}</label>
            </div>
          </div>
        </div>
        <button className="ui button">Submit</button>
      </form>
    )
  }
}
export default connect()(QuestionVoteForm)
