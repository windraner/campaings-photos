import React from 'react';
import FiltersContainer from '../components/filters_container/filters_container';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { markersList } from './mocks';

configure({ adapter: new Adapter() });

const mock = {
  searchInput: '',
  markersList: markersList,
  isFilterShown: true,
  stateHandler() {},
};

describe('FiltersContainer', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<FiltersContainer {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
