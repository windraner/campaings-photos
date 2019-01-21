import React from 'react';
import MainContainer from '../components/main_container/main_container';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  loading: false,
  isSelectedAll: false,
  isFilterShown: true,
  itemsView: 'list',
  page: 1,
  perPage: 25,
  pagesCount: 10,
  switchHandler() {},
  stateHandler() {},
};

describe('MainContainer', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<MainContainer {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('matches the snapshot', () => {
    const tree = shallow(<MainContainer {...mock} isFilterShown={false} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
