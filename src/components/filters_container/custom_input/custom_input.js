import React, { Component } from 'react';

import { SEARCH_INPUT } from '../../../constans';

import './custom_input.css';

export default class CustomInput extends Component {
  render() {
    const { searchInput, stateHandler } = this.props;

    return (
      <div className="position-relative">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => stateHandler(SEARCH_INPUT, e.target.value)}
          onBlur={(e) => stateHandler(SEARCH_INPUT, e.target.value.trim())}
          className="campaigns-photos__filter-input"
          placeholder="Search list"
        />
        <span className="campaigns-photos__filter-input-icon d-flex align-items-center" />
      </div>
    );
  }
}
