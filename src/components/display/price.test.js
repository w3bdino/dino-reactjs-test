import React from 'react';
import { shallow } from 'enzyme';
import DisplayPrice from './price';

describe("Display price component", () => { 
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <DisplayPrice 
        price="100" 
        currency="$" 
        daymonth="month" 
      />
    );
  });

  it('should render DisplayPrice correctly with props', () => {
    expect(wrapper.find('.displayprice').text()).toEqual('$100 per month')
  });
  
});