  
import React from 'react';
import { shallow, mount } from 'enzyme';
import Timer from './Timer';

describe('render Timer component', () => {

  const container = shallow(<Timer />);


  it('should render a div in Timer', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  });

  it("should render instances of the TimerButton component", () => {
    expect(container.find("button").length).toEqual(3)
  })
  
})