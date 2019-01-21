import React from 'react';
import FilterCheckLine from '../components/filters_container/filter_check_line/filter_check_line';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { markersList } from './mocks';

configure({ adapter: new Adapter() });

const mock = {
  item: {isChecked: true, name: '', count: '', id: ''},
  markersList: markersList,
  stateHandler() {},
};

describe('FilterCheckLine', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<FilterCheckLine {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
