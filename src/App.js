import React from 'react'
import Button from './components/Button'
import { FriendshipProgressBar, HungerProgressBar } from './components/ProgressBar'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
`

class App extends React.Component {
  state = {
    friendship: 0,
    friendshipMessage: '',
    hunger: 100,
    friendshipClicks: 0,
    hungerClicks: 0
  }

  playBtnClick = () => {
    if (this.state.friendship < 100 && this.state.friendshipClicks < 2) {
      this.setState({ friendship: this.state.friendship + 10})
      this.setState({ friendshipClicks: this.state.friendshipClicks + 1 })
    }
    if (this.state.friendshipClicks === 2) {
      this.setState({ friendshipMessage: "You've used all your clicks for today!"})
    } else if (this.state.friendship === 100) {
      this.setState({ friendshipMessage: "You're already best friends!"})
    }
  }

  feedBtnClick = () => {
    if (this.state.hunger > 0) {
      this.setState({ hunger: this.state.hunger - 10})
      this.setState({ hungerClicks: this.state.hungerClicks + 1 })
    } 
  }

  render() {
    return (
      <div className="App" data-test="app-component">
        <h1>Unicorn <span role="img" aria-label="heart">♥️</span></h1>
        <Container>
          <p>{this.state.friendshipMessage}</p>
          <Button btnText="Play" onClick={() => this.playBtnClick()} data-test="play-button" />
          <FriendshipProgressBar blueProgress={this.state.friendship} data-test="friendship-progress-bar"/>
        </Container>
        <Container>
          <Button btnText="Feed" onClick={() => this.feedBtnClick()} data-test="feed-button" />
          <HungerProgressBar pinkProgress={this.state.hunger} data-test="hunger-progress-bar"/>
        </Container>
        <img src="https://image.spreadshirtmedia.net/image-server/v1/mp/designs/151699563,width=178,height=178,version=1550187640/cute-music-unicorn-mythical-animal-kawaii-chibi.png" alt="Unicorn"/>
      </div>
  )}

}

export default App
