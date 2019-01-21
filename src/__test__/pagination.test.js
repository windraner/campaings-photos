import React from 'react';
import Pagination from '../components/main_container/bottom_bar/pagination/pagination';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  page: 1,
  pagesCount: 10,
  stateHandler() {},
};

describe('Pagination', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Pagination {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
