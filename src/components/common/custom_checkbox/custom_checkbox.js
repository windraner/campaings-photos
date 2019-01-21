import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MARKERS_LIST } from '../../../constans';
import { updateMarkerList } from '../../../utils';

import './custom_checkbox.css';

export default class CustomCheckbox extends Component {
  switchHandler = () => {
    const { markersList, id, stateHandler } = this.props;
    const newMarkersList = updateMarkerList({markersList, id});

    stateHandler(MARKERS_LIST, newMarkersList);
  }

  render() {
    const { isChecked } = this.props;

    return (
      <input
        type="checkbox"
        checked={isChecked}
        onChange={this.switchHandler}
        className="campaigns-photos__custom-checkbox mr-2"
      />
    );
  }
}

CustomCheckbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  markersList: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  stateHandler: PropTypes.func.isRequired,
};
