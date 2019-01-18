import React, { Component } from 'react';

import { PER_PAGE, PER_PAGE_LIST } from '../../../../constans';

import './per_page_selector.css';

export default class PerPageSelector extends Component {
  renderOptions = () => {
    return PER_PAGE_LIST.map((item, i) => {
      return (
        <option key={i} className="campaigns-photos__select-option">
          {item}
        </option>
      );
    });
  }

  render() {
    const { value, stateHandler } = this.props;

    return (
      <div className="d-flex">
        <div className="campaigns-photos__select-text d-flex align-items-center mr-2">
          Results per page:
        </div>

        <div className="position-relative">
          <select
            value={value}
            onChange={(e) => stateHandler(PER_PAGE, e.target.value)}
            className="campaigns-photos__select"
          >
            {this.renderOptions()}
          </select>
          <span className="campaigns-photos__select-icon" />
        </div>
      </div>
    );
  }
}
