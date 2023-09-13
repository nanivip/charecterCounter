import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class CounterCard extends Component {
  state = {inputValue: '', wordsList: []}

  onChangeValue = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickChange = event => {
    event.preventDefault()
    const {inputValue} = this.state
    const addItem = {
      id: uuidv4(),
      item: inputValue,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, addItem],
      inputValue: '',
    }))
  }

  render() {
    const {inputValue, wordsList} = this.state
    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="heading">Count the characters like a Boss...</h1>
          <div className="count-char-container">
            {wordsList.length > 0 ? (
              <ul className="list-container">
                {wordsList.map(each => (
                  <li key={each.id} className="li-container">
                    <p className="para">
                      {each.item}: {each.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
          </div>
        </div>
        <div className="input-container">
          <h1 className="description">Character Counter</h1>
          <form className="btn-input-container" onSubmit={this.onClickChange}>
            <input
              type="text"
              className="input"
              placeholder="Enter the Characters here"
              onChange={this.onChangeValue}
              value={inputValue}
            />
            <button
              type="submit"
              className="button"
              onClick={this.onClickChange}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default CounterCard
