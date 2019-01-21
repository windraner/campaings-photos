import React from 'react';
import CustomCheckbox from '../components/common/custom_checkbox/custom_checkbox';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { markersList } from './mocks';

configure({ adapter: new Adapter() });

const mock = {
  isChecked: false,
  markersList: markersList,
  id: 'pending',
  stateHandler() {},
};

describe('CustomCheckbox', () => {
  it('Check for callback is called', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<CustomCheckbox {...mock} stateHandler={onClickFunc} />);
    const button = wrapper.find('.campaigns-photos__custom-checkbox');
    button.simulate('change');
    expect(onClickFunc).toBeCalled();
  });
  it('matches the snapshot', () => {
    const tree = shallow(<CustomCheckbox {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('matches the snapshot', () => {
    const tree = shallow(<CustomCheckbox {...mock} isChecked={true} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
