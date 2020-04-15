import React from 'react'
import styled from 'styled-components'

const BlueProgressBar = styled.div`
  height: 20px;
  width: 350px;
  border-radius: 50px;
  border: 1px solid #70bbdb;
`
const Filler = styled.div`
  background: #70bbdb;
  height: 100%;
  border-radius: inherit;
  transition: width .2s ease-in;
`

const ProgressBar = (props) => {
  console.log(props)
  return (
    <BlueProgressBar>
      <Filler style={{ width: `${props.blueProgress}%` }}/>
    </BlueProgressBar>
  )
}

export default ProgressBar