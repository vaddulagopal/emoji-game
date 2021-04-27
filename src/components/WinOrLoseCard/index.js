// Write your code here.
import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  returnWinCard = () => {
    const {score, onRestartGame} = this.props
    const onPlayAgainClick = () => {
      onRestartGame()
    }

    const resultImg =
      score === 12
        ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    const result = score === 12 ? 'You Won' : 'You Lose'
    const scoreTitle = score === 12 ? 'Best Score' : 'Score'
    return (
      <div className="win-card-container">
        <img className="result-image" alt="result-img" src={resultImg} />
        <div className="description-container">
          <h1 className="result">{result}</h1>
          <p className="score-title">{scoreTitle}</p>
          <p className="score">{`${score}/12`}</p>
          <div className="btn-container">
            <button className="button" type="button" onClick={onPlayAgainClick}>
              Play Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return this.returnWinCard()
  }
}
export default WinOrLoseCard
