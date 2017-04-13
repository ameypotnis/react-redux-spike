import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Counter from './Counter';

const actions = {
  onIncrement: () => jest.fn(),
  onDecrement: () => jest.fn()
}

const wrapper = shallow(
  <Counter value={10} {...actions} />
)

it('should display counter', () => {
  expect(wrapper.find("#counter").text()).to.equal('10');
  wrapper.find("#inc").simulate('click');
});
