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
  it('check prev button click', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<Pagination {...mock} page={2} stateHandler={onClickFunc} />);
    const button = wrapper.find('.campaigns-photos__pagination-button-prev');
    button.simulate('click');
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([['page', 1]]);
  });
  it('check prev button disabled', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<Pagination {...mock} stateHandler={onClickFunc} />);
    const button = wrapper.find('.campaigns-photos__pagination-button-prev');
    button.simulate('click');
    expect(onClickFunc).not.toBeCalled();
  });

  it('check next button click', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<Pagination {...mock} stateHandler={onClickFunc} />);
    const button = wrapper.find('.campaigns-photos__pagination-button-next');
    button.simulate('click');
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([['page', 2]]);
  });
  it('check next button disabled', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<Pagination {...mock} page={10} stateHandler={onClickFunc} />);
    const button = wrapper.find('.campaigns-photos__pagination-button-next');
    button.simulate('click');
    expect(onClickFunc).not.toBeCalled();
  });

  it('check page button click', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<Pagination {...mock} stateHandler={onClickFunc} />);
    const button = wrapper.find('.campaigns-photos__pagination-page').at(3);
    button.simulate('click');
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([['page', 4]]);
  });
  it('check page button active', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<Pagination {...mock} stateHandler={onClickFunc} />);
    const button = wrapper.find('.campaigns-photos__pagination-page__active');
    button.simulate('click');
    expect(onClickFunc).not.toBeCalled();
  });

  it('matches the snapshot', () => {
    const tree = shallow(<Pagination {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
