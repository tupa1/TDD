
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CheckboxWithLabel from '../src/components/CheckboxWithLabel';

Enzyme.configure({ adapter: new Adapter() });

describe('<CheckboxWithLabel /> Component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
  });
  describe('first render', () => {
    it('CheckboxWithLabel should show Off at the first time', () => {
      expect(component.text()).toEqual('Off');
    });
  });
  describe('Checkbox click 1', () => {
    it('CheckboxWithLabel changes the text after the first click', () => {
      component.find('input').simulate('change');
      expect(component.text()).toEqual('On');
    });
  });
  describe('Checkbox click 2', () => {
    it('CheckboxWithLabel changes the text after the second click', () => {
      component.find('input').simulate('change');
      component.find('input').simulate('change');
      expect(component.text()).toEqual('Off');
    });
  });
});
