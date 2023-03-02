import './index.css'

const NavBar = props => {
  const {score, highScore} = props

  return (
    <nav className="navCon">
      <div className="logoCon">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logoImg"
        />
        <h1 className="logoP">Emoji Game</h1>
      </div>
      <div className="scoreCon">
        <p className="scoreP">
          Score: <span className="scoreSpan">{score}</span>
        </p>
        <p className="scoreP">
          Top Score: <span className="scoreSpan">{highScore}</span>
        </p>
      </div>
    </nav>
  )
}

export default NavBar
