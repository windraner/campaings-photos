import React from 'react';
import PerPageSelector from '../components/main_container/bottom_bar/per_page_selector/per_page_selector';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  value: 25,
  stateHandler() {},
};

describe('PerPageSelector', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<PerPageSelector {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
