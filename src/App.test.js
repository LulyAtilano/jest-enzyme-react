import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import { exportAllDeclaration } from '@babel/types';

Enzyme.configure({adapter: new EnzymeAdapter()});

test('renders without error', () => {
    const wrapper = shallow(<App />);
    // Debug method
    //console.log(wrapper.debug())
    expect(wrapper).toBeFalsy();
});
