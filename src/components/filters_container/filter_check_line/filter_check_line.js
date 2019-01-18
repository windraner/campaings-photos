import React from 'react';
import CustomCheckbox from '../../common/custom_checkbox/custom_checkbox';
import PropTypes from 'prop-types';

import './filter_check_line.css';

const FilterCheckLine = (props) => {
  const { markersList, stateHandler } = props;
  const { isChecked, name, count, id } = props.item;
  return (
    <label className="d-flex align-items-center">
      <CustomCheckbox
        id={id}
        isChecked={isChecked}
        stateHandler={stateHandler}
        markersList={markersList}
      />
      <span className={`campaigns-photos__filterCheckLine-text ${isChecked && 'campaigns-photos__filterCheckLine-text__active'}`}>
        {name} ({count})
      </span>
    </label>
  );
};

FilterCheckLine.propTypes = {
  markersList: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default FilterCheckLine;
