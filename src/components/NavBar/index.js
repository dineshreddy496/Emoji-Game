import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  renderScores = () => {
    const {currentScore, topScore, isGameOver} = this.props

    if (isGameOver) {
      return null
    }
    return (
      <div className="scores-container">
        <p className="score">Score: {currentScore}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="title-with-score-container">
          <div className="logo-and-title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              className="emoji-logo"
              alt="Emoji Logo"
            />
            <h1 className="title">Emoji Game</h1>
          </div>
          {this.renderScores()}
        </div>
      </div>
    )
  }
}

export default NavBar
