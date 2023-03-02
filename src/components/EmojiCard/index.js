import './index.css'

const EmojiCard = props => {
  const {onClickingImg, itemDetails} = props
  const {id, emojiName, emojiUrl} = itemDetails

  const onClicking = () => {
    onClickingImg(id)
  }

  return (
    <li className="listItem">
      <button type="button" className="ImgBton" onClick={onClicking}>
        <img src={emojiUrl} alt={emojiName} className="emojiImg" />
      </button>
    </li>
  )
}

export default EmojiCard
