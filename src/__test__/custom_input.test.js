import React from 'react';
import CustomInput from '../components/filters_container/custom_input/custom_input';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  searchInput: '',
  stateHandler() {},
};

describe('CustomInput', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<CustomInput {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
