import React from 'react';
import BottomBar from '../components/main_container/bottom_bar/bottom_bar';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  page: 1,
  perPage: 25,
  pagesCount: 10,
  stateHandler() {},
};

describe('BottomBar', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<BottomBar {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
