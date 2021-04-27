/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    showHomePage: true,
    score: 0,
    topScore: 0,
    emojiArray: [],
  }

  updateScore = (value, selectedId) => {
    const {emojiArray} = this.state
    const updatedArray = [...emojiArray, selectedId]
    this.setState(prevState => ({
      showHomePage: value,
      emojiArray: updatedArray,
      score: prevState.score + 1,
    }))
  }

  updateShowHomePage = value => {
    const {emojiArray} = this.state
    const arrayLength = emojiArray.length

    this.setState({
      topScore: arrayLength,
      showHomePage: value,
      emojiArray: '',
    })
  }

  onRestartGame = () => {
    const {score, topScore} = this.state
    const newTopScore = score > topScore ? score : topScore
    this.setState({
      showHomePage: true,
      score: 0,
      topScore: newTopScore,
      emojiArray: [],
    })
  }

  showWinOrLossCard = () => {
    const {showHomePage, score} = this.state
    if (showHomePage === false || score === 12) {
      return <WinOrLoseCard score={score} onRestartGame={this.onRestartGame} />
    }
    return null
  }

  showHomePageEmoji = () => {
    const {emojiArray, showHomePage, score} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      if (score > 0) {
        return emojisList.sort(() => Math.random() - 0.5)
      }
      return emojisList
    }
    const emojisList = shuffledEmojisList()

    if (showHomePage) {
      return (
        <ul className="emoji-list-container">
          {emojisList.map(eachEmoji => (
            <EmojiCard
              eachEmoji={eachEmoji}
              key={eachEmoji.id}
              emojiArray={emojiArray}
              updateScore={this.updateScore}
              updateShowHomePage={this.updateShowHomePage}
            />
          ))}
        </ul>
      )
    }
    return null
  }

  render() {
    const {score, topScore, showHomePage} = this.state
    return (
      <>
        <div className="bg-container">
          <NavBar
            scoreDetails={score}
            topScoreDetails={topScore}
            showHomePage={showHomePage}
          />
          {this.showWinOrLossCard()}
          {this.showHomePageEmoji()}
        </div>
      </>
    )
  }
}
export default EmojiGame
