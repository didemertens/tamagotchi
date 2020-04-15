import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapater from 'enzyme-adapter-react-16'
import App from './App'

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
