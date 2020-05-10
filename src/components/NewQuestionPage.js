import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { withRouter } from 'react-router-dom'

class NewQuestionPage extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
  }

  handleChange = (e) => {
    const optionOneText =
      e.target.name === 'optionOneText'
        ? e.target.value
        : this.state.optionOneText
    const optionTwoText =
      e.target.name === 'optionTwoText'
        ? e.target.value
        : this.state.optionTwoText
    this.setState({
      optionOneText,
      optionTwoText,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion({ optionOneText, optionTwoText }))
    this.props.history.push(`/`)
  }
  render() {
    return (
      <div className="ui centered grid">
        <div className="eight wide column">
          <h2>Create a new question</h2>
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="grouped fields">
              <h3>Would you rather...</h3>
              <div className="field">
                <label htmlFor="optionOneText">
                  {this.props.optionOneText}
                </label>
                <input
                  name="optionOneText"
                  onChange={this.handleChange}
                  value={this.state.optionOneText}
                  required
                />
              </div>
              <div className="ui horizontal divider">Or</div>
              <div className="field">
                <label htmlFor="optionTwoText">
                  {this.props.optionTwoText}
                </label>
                <input
                  name="optionTwoText"
                  onChange={this.handleChange}
                  value={this.state.optionTwoText}
                  required
                />
              </div>
            </div>
            <button className="ui button">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default withRouter(connect(mapStateToProps)(NewQuestionPage))
