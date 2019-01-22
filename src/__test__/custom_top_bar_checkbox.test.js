import React from 'react';
import CustomTopBarCheckbox from '../components/main_container/top_bar/custom_top_bar_checkbox/custom_top_bar_checkbox';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  isChecked: true,
  switchHandler() {},
};

describe('CustomTopBarCheckbox', () => {
  it('Check for value is setted', () => {
    const wrapper = shallow(<CustomTopBarCheckbox {...mock} />);
    expect(wrapper.find('.campaigns-photos__custom-checkbox').props().checked).toBe(true);
    wrapper.setProps({ isChecked: false });
    expect( wrapper.find('.campaigns-photos__custom-checkbox').props().checked).toBe(false);
  });
  it('Check for callback is called', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<CustomTopBarCheckbox {...mock} switchHandler={onClickFunc} />);
    const button = wrapper.find('.campaigns-photos__custom-checkbox');
    button.simulate('change');
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([['isSelectedAll']]);
  });
  it('matches the snapshot', () => {
    const tree = shallow(<CustomTopBarCheckbox {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
