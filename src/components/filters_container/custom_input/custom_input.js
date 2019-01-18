import React from 'react';
import PropTypes from 'prop-types';

import { SEARCH_INPUT } from '../../../constans';

import './custom_input.css';

const CustomInput = (props) => {
  const { searchInput, stateHandler } = props;
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
};

CustomInput.propTypes = {
  searchInput: PropTypes.string.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default CustomInput;
