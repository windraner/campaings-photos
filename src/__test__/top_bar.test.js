import React from 'react';
import TopBar from '../components/main_container/top_bar/top_bar';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  isSelectedAll: false,
  isFilterShown: true,
  itemsView: 'list',
  switchHandler() {},
  stateHandler() {},
};

describe('TopBar', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<TopBar {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
