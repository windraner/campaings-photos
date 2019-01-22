import React from 'react';
import PerPageSelector from '../components/main_container/bottom_bar/per_page_selector/per_page_selector';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  value: 25,
  stateHandler() {},
};

describe('PerPageSelector', () => {
  it('Check for value is setted', () => {
    const wrapper = shallow(<PerPageSelector {...mock} />);
    const button = wrapper.find('.campaigns-photos__select');
    expect(button.props().value).toBe(25);
  });
  it('Check for callback is called', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<PerPageSelector {...mock} stateHandler={onClickFunc} />);
    const button = wrapper.find('.campaigns-photos__select');
    button.simulate('change', { target: { value: 50 }});
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([['perPage', 50]]);
  });
  it('matches the snapshot', () => {
    const tree = shallow(<PerPageSelector {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
