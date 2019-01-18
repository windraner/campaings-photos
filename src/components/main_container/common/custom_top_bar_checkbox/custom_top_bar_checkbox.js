import React from 'react';

import { IS_SELECTED_ALL } from '../../../../constans';

import './custom_top_bar_checkbox.css';

const CustomTopBarCheckbox = (props) => {
  const { isChecked, switchHandler } = props;
  return (
    <label className="d-flex align-items-center">
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

export default CustomTopBarCheckbox;
