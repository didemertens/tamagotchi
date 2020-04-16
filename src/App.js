import React from 'react'
import Button from './components/Button'
import { FriendshipProgressBar, HungerProgressBar } from './components/ProgressBar'

class App extends React.Component {
  state = {
    friendship: 0,
    hunger: 100
  }

  playBtnClick = () => {
    if (this.state.friendship < 100) {
      this.setState({ friendship: this.state.friendship + 10})
    }
  }

  feedBtnClick = () => {
    if (this.state.hunger > 0) {
      this.setState({ hunger: this.state.hunger - 10})
    } 
  }

  render() {
    return (
      <div className="App" data-test="app-component">
        <h1>Unicorn <span role="img" aria-label="heart">♥️</span></h1>
        <Button btnText="Play" onClick={() => this.playBtnClick()} data-test="play-button" />
        <p data-test="display-friendship">{this.state.friendship}</p>
        <FriendshipProgressBar blueProgress={this.state.friendship} data-test="friendship-progress-bar"/>
        <Button btnText="Feed" btnClick={this.feedBtnClick} data-test="feed-button" />
        <p data-test="display-hunger">{this.state.hunger}</p>
        <HungerProgressBar pinkProgress={this.state.hunger} data-test="hunger-progress-bar"/>
        <img src="https://image.spreadshirtmedia.net/image-server/v1/mp/designs/151699563,width=178,height=178,version=1550187640/cute-music-unicorn-mythical-animal-kawaii-chibi.png" alt="Unicorn"/>
      </div>
  )}

}

export default App
