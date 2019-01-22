import React from 'react';
import CustomInput from '../components/filters_container/custom_input/custom_input';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  searchInput: '',
  stateHandler() {},
};

describe('CustomInput', () => {
  it('Check for value is setted', () => {
    const wrapper = shallow(<CustomInput {...mock} searchInput={'foo'} />);
    const button = wrapper.find('.campaigns-photos__filter-input');
    expect(button.props().value).toBe('foo');
  });
  it('Check for callback is called', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<CustomInput {...mock} stateHandler={onClickFunc} />);
    const button = wrapper.find('.campaigns-photos__filter-input');
    button.simulate('change', { target: { value: 'foo' }});
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([['searchInput', 'foo']]);
  });
  it('matches the snapshot', () => {
    const tree = shallow(<CustomInput {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
