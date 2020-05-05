import React from 'react';
import { shallow } from 'enzyme';
import RadioFields from './radio';

describe("Radio component", () => { 
  let wrapper;
  beforeEach(() => {
    const radiolist = [
        { value: 'standard', label: 'Standard Edition'},
        { value: 'enterprise', label: 'Enterprise Edition'},
      ];
      
      wrapper = shallow(
        <RadioFields 
          radiolist={radiolist} 
          name="Price"
        /> 
      );
  });
      
  it('should render DisplayPrice correctly with props', () => {
    expect(wrapper.exists()).toBe(true)
  });
})