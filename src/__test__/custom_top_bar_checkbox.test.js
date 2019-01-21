import React from 'react';
import CustomTopBarCheckbox from '../components/main_container/top_bar/custom_top_bar_swipe_checkbox/custom_top_bar_swipe_checkbox';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  isChecked: true,
  switchHandler() {},
};

describe('CustomTopBarCheckbox', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<CustomTopBarCheckbox {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
