import React, { Component } from 'react';

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
