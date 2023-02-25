import './index.css'

const WinOrLoseCard = props => {
  const {result, Score, setScoreToZero} = props

  console.log(result)

  const clickedPlayAgain = () => {
    setScoreToZero()
  }

  return (
    <div>
      {result === 'WON' ? (
        <div className="bg-container">
          <nav className="nav">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="logo"
            />
          </nav>

          <div className="win-lose-container" />
          <div className="text-container">
            <h1 className="heading">You Won</h1>
            <p>Best Score</p>
            <p>12/12</p>
            <button onClick={clickedPlayAgain} type="button">
              Play Again
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="win or lose"
            />
          </div>
        </div>
      ) : (
        <div className="bg-container">
          <nav className="nav">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="logo"
            />
          </nav>

          <div className="win-lose-container" />
          <div className="text-container">
            <h1 className="heading">You Lose</h1>
            <p>Score</p>
            <p>{Score}/12</p>
            <button onClick={clickedPlayAgain} type="button">
              Play Again
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="win or lose"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
