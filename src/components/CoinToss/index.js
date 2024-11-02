// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossId: 0,
    headsCount: 0,
    tailsCount: 0,
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        tossId: 0,
        headsCount: prevState.headsCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        tossId: 1,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {tossId, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    const imageUrl =
      tossId === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="cointoss-bg-container">
        <div className="cointoss-card">
          <h1 className="game-name">Coin Toss Game</h1>
          <p className="head-or-tail-text">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="coin-image" />
          <button className="toss-coin-btn" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
