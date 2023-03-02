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

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {mainList: [], isThere: false, score: 0, highScore: 0}

  onClickingImg = id => {
    const {mainList, score} = this.state
    const {emojisList} = this.props
    if (mainList.includes(id)) {
      this.setState({isThere: true})
    } else if (score === emojisList.length - 1) {
      this.setState({isThere: true})
    } else {
      this.setState(prevState => ({
        mainList: [...prevState.mainList, id],
        score: prevState.score + 1,
      }))
    }
  }

  onPlayAgain = () => {
    const {score, highScore} = this.state
    if (score > highScore) {
      this.setState({highScore: score})
    }
    this.setState({
      mainList: [],
      isThere: false,
      score: 0,
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const mainEmojisList = this.shuffledEmojisList()
    const {emojisList} = this.props
    const {isThere, score, highScore} = this.state

    return (
      <div className="mainCon">
        {isThere ? (
          <WinOrLoseCard
            onPlayAgain={this.onPlayAgain}
            score={score}
            emojisList={emojisList}
          />
        ) : (
          <>
            <NavBar score={score} highScore={highScore} />
            <ul className="listCon">
              {mainEmojisList.map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  onClickingImg={this.onClickingImg}
                  itemDetails={eachItem}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default EmojiGame
