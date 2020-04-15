import React from 'react'
import Button from './components/Button'

const App = () =>  (
  <div className="App" data-test="app-component">
    <h1>Tama</h1>
    <Button data-test="play-button" />
  </div>
)

export default App
