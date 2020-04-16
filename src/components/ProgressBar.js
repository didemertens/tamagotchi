import React from 'react'
import styled from 'styled-components'

const BlueProgressBar = styled.div`
  height: 20px;
  width: 350px;
  border-radius: 50px;
  border: 1px solid #70bbdb;
`

const PinkProgressBar = styled.div`
  height: 20px;
  width: 350px;
  border-radius: 50px;
  border: 1px solid #db69ae;
`

const Filler = styled.div`
  background: #f29c66;
  height: 100%;
  border-radius: inherit;
  transition: width .2s ease-in;
`

export const FriendshipProgressBar = (props) => {
  return (
      <BlueProgressBar>
        <Filler style={{ width: `${props.blueProgress}%` }}/>
      </BlueProgressBar>
  )
}

export const HungerProgressBar = (props) => {
  return (
      <PinkProgressBar>
        <Filler style={{ width: `${props.pinkProgress}%` }}/>
      </PinkProgressBar>
  )
}