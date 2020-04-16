import React from 'react'
import styled from 'styled-components'

const BlueBtn = styled.button`
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #70bbdb;
  border: 2px solid #70bbdb;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #70bbdb;
    color: white;
  }
`

const Button = ({ btnText, onClick }) => {
  return (
  <BlueBtn data-test="button" onClick={onClick}>{btnText}</BlueBtn>
)}

export default Button