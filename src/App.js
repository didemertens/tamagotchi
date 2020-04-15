import React from 'react'
import Button from './components/Button'
import ProgressBar from './components/ProgressBar'

class App extends React.Component {
  state = {
    friendship: 0,
    hunger: 10
  }

  playBtnClick = () => {
    if (this.state.friendship < 100) {
      this.setState({ friendship: this.state.friendship + 10})
    }
  }

  feedBtnClick = () => {
    if (this.state.hunger > 0) {
      this.setState({ hunger: this.state.hunger - 1})
    } 
  }

  render() {
    console.log(this.state)
    return (
      <div className="App" data-test="app-component">
        <h1>Unicorn <span role="img" aria-label="heart">♥️</span></h1>
        <ProgressBar data-test="progress-bar" blueProgress={this.state.friendship}/>

        <img src="https://image.spreadshirtmedia.net/image-server/v1/mp/designs/151699563,width=178,height=178,version=1550187640/cute-music-unicorn-mythical-animal-kawaii-chibi.png" alt="Unicorn"/>
        
        <div>
          <Button btnText="Play" btnClick={this.playBtnClick} data-test="play-button" />
          <Button btnText="Feed" btnClick={this.feedBtnClick} data-test="feed-button" />
        </div>
      </div>
  )}

}

export default App
