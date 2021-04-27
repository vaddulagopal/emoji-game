// Write your code here.
import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  getTheListItem = () => {
    const {eachEmoji, updateScore, emojiArray, updateShowHomePage} = this.props
    const {id} = eachEmoji
    const resultCheck = emojiArray.includes(id)
    const onEmojiClicked = () => {
      if (resultCheck) {
        updateShowHomePage(false)
      } else {
        updateScore(true, id)
      }
    }

    return (
      <li
        className="list-item-container"
        key={eachEmoji.id}
        onClick={onEmojiClicked}
      >
        <img
          className="emoji"
          alt={eachEmoji.emojiName}
          src={eachEmoji.emojiUrl}
        />
      </li>
    )
  }

  render() {
    return this.getTheListItem()
  }
}
export default EmojiCard
