import './index.css'

const WinOrLoseCard = props => {
  const {onPlayAgain, score, emojisList} = props
  const isWin = score >= emojisList.length
  const imgUrl = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const winOrLoseP = isWin ? 'You Won' : 'You Lose'
  const loseOrWinP = isWin ? 'Best Score' : 'Score'
  console.log(isWin)

  return (
    <div className="winOrloseCon">
      <nav className="winNav">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="navImg"
        />
        <p className="navText">Emoji Game</p>
      </nav>
      <div className="winCon">
        <div className="winCard">
          <div className="detailsCon">
            <h1 className="winP">{winOrLoseP}</h1>
            <p className="winP1">{loseOrWinP}</p>
            <p className="winP2">{score}/12</p>
            <button className="bton" onClick={onPlayAgain} type="button">
              Play Again
            </button>
          </div>
          <img src={imgUrl} alt="win or lose" className="winImg" />
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
