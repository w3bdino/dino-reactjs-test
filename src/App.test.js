import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App /> rendering', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<App />);
  });
});