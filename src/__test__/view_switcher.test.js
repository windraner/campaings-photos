import React from 'react';
import ViewSwitcher from '../components/main_container/top_bar/view_switcher/view_switcher';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  itemsView: 'list',
  stateHandler() {},
};

describe('ViewSwitcher', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<ViewSwitcher {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('matches the snapshot', () => {
    const tree = shallow(<ViewSwitcher {...mock} itemsView={'grid'} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
