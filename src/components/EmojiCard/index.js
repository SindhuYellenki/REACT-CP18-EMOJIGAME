import './index.css'

const EmojiCard = props => {
  const {details, addEmojiIdToList} = props
  const {id, emojiName, emojiUrl} = details

  const onClickEmoji = () => {
    addEmojiIdToList(id)
  }
  return (
    <li className="emojiCard">
      <button type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
