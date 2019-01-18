import React from 'react';

import { IS_FILTER_SHOWN } from '../../../../constans';

import './custom_top_bar_swipe_checkbox.css';

const CustomTopBarSwipeCheckbox = (props) => {
  const { isChecked, switchHandler } = props;
  return (
    <div className="d-flex justify-content-between">
      <label className="d-flex m-0">
        <input
          checked={isChecked}
          type="checkbox"
          className="campaigns-photos__switch-input position-relative m-0"
          onChange={() => switchHandler(IS_FILTER_SHOWN)}
        />
        <span className="campaigns-photos__switch-text">Show filters</span>
      </label>
    </div>
  );
};

export default CustomTopBarSwipeCheckbox;
