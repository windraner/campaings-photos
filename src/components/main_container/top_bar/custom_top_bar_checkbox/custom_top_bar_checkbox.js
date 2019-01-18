import React from 'react';
import PropTypes from 'prop-types';

import { IS_SELECTED_ALL } from '../../../../constans';

import './custom_top_bar_checkbox.css';

const CustomTopBarCheckbox = (props) => {
  const { isChecked, switchHandler } = props;
  return (
    <label className="d-flex align-items-center m-0">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => switchHandler(IS_SELECTED_ALL)}
        className="campaigns-photos__custom-checkbox mr-2"
      />
      <span className={`campaigns-photos__customTopBarCheckbox-text ${isChecked && 'campaigns-photos__customTopBarCheckbox-text__active'}`}>
        Select all
      </span>
    </label>
  );
};

CustomTopBarCheckbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  switchHandler: PropTypes.func.isRequired,
};

export default CustomTopBarCheckbox;
