import React from 'react';
import CustomTopBarSwipeCheckbox from '../components/main_container/top_bar/custom_top_bar_swipe_checkbox/custom_top_bar_swipe_checkbox';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  isChecked: true,
  switchHandler() {},
};

describe('CustomTopBarSwipeCheckbox', () => {
  it('Check for value is setted', () => {
    const wrapper = shallow(<CustomTopBarSwipeCheckbox {...mock} />);
    expect(wrapper.find('.campaigns-photos__switch-input').props().checked).toBe(true);
    wrapper.setProps({ isChecked: false });
    expect( wrapper.find('.campaigns-photos__switch-input').props().checked).toBe(false);
  });
  it('Check for callback is called', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<CustomTopBarSwipeCheckbox {...mock} switchHandler={onClickFunc} />);
    const button = wrapper.find('.campaigns-photos__switch-input');
    button.simulate('change');
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([['isFilterShown']]);
  });
  it('matches the snapshot', () => {
    const tree = shallow(<CustomTopBarSwipeCheckbox {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
