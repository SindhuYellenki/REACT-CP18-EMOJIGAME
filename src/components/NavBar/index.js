import './index.css'

const NavBar = props => {
  const {Score, TopScore} = props
  return (
    <nav className="navbar">
      <div className="text-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="nav-text">Emoji Game</h1>
      </div>
      <div className="text-container">
        <p className="nav-text">Score: {Score}</p>
        <p className="nav-text">Top Score: {TopScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
