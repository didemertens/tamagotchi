import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapater from 'enzyme-adapter-react-16'
import App from '../App'
import Button from '../components/Button'

Enzyme.configure({ adapter: new EnzymeAdapater() })

const setup = () => {
  const wrapper = shallow(<App />)
  return wrapper
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('renders component without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'app-component')
  expect(appComponent.length).toBe(1)
})

test('renders play button', () => {
  const wrapper = setup()
  const playButton = findByTestAttr(wrapper, 'play-button')
  expect(playButton.length).toBe(1)
})

test('renders feed button', () => {
  const wrapper = setup()
  const feedButton = findByTestAttr(wrapper, 'feed-button')
  expect(feedButton.length).toBe(1)
})

test('renders the friendship progress bar', () => {
  const wrapper = setup()
  const progressBar = findByTestAttr(wrapper, 'friendship-progress-bar')
  expect(progressBar.length).toBe(1)
})

test('renders the hunger progress bar', () => {
  const wrapper = setup()
  const progressBar = findByTestAttr(wrapper, 'hunger-progress-bar')
  expect(progressBar.length).toBe(1)
})

test('when clicking on play button, friendship increases', () => {
  const wrapper = setup()
  const buttonWrapper = shallow(<Button />)
  const playButton = findByTestAttr(buttonWrapper, 'button')
  playButton.simulate('click')
  console.log(wrapper.debug())
  const friendshipDisplay = findByTestAttr(wrapper, 'display-friendship')
  expect(friendshipDisplay.text()).toContain('10')
})