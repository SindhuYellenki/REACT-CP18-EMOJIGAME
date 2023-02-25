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

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  state = {Score: 0, TopScore: 0, clickedList: [], result: ''}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  addEmojiIdToList = id => {
    const {clickedList, result, Score, TopScore} = this.state
    if (clickedList.includes(id)) {
      this.setState({result: 'LOST'})
      if (TopScore < Score) {
        this.setState({TopScore: Score})
      }
    } else if (clickedList.length === 11) {
      this.setState({result: 'WON', Score: 12, TopScore: 12})
    } else {
      this.setState(p => ({
        Score: p.Score + 1,
        clickedList: [...p.clickedList, id],
      }))
    }
  }

  setScoreToZero = () => {
    this.setState({Score: 0, result: '', clickedList: []})
  }

  render() {
    const {Score, TopScore, clickedList, result} = this.state
    const shuffeledList = this.shuffledEmojisList()
    console.log(shuffeledList)
    console.log(clickedList)
    return (
      <div>
        {result !== '' ? (
          <WinOrLoseCard
            result={result}
            Score={Score}
            setScoreToZero={this.setScoreToZero}
          />
        ) : (
          <div className="bg-container">
            <NavBar Score={Score} TopScore={TopScore} />
            <ul className="emojiContainer">
              {shuffeledList.map(each => (
                <EmojiCard
                  details={each}
                  key={each.id}
                  addEmojiIdToList={this.addEmojiIdToList}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
