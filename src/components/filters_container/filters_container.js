import React, { Component } from 'react';
import CustomInput from './custom_input/custom_input';
import FilterCheckLine from './filter_check_line/filter_check_line';
import PropTypes from 'prop-types';

import './filters_container.css';

export default class FiltersContainer extends Component {

  renderFiltersLineBlock = (type) => {
    const { markersList, stateHandler } = this.props;

    const newMarkersList = markersList.filter((item) => item.type === type);

    const result = newMarkersList.map((item) => {
      return (
        <FilterCheckLine
          key={item.id}
          item={item}
          stateHandler={stateHandler}
          markersList={markersList}
        />
      );
    });

    return result;
  }

  render() {
    const { isFilterShown, searchInput, stateHandler } = this.props;

    if(!isFilterShown) {
      return null;
    }

    return (
      <div className="campaigns-photos__filter-container">
        <CustomInput
          searchInput={searchInput}
          stateHandler={stateHandler}
        />

        <div className="campaigns-photos_mt-32">
          {this.renderFiltersLineBlock('all')}
          <div className="campaigns-photos_mt-32">
            {this.renderFiltersLineBlock('main')}
          </div>
          <div className="campaigns-photos_mt-32">
            {this.renderFiltersLineBlock('secondary')}
          </div>
        </div>
      </div>
    );
  }
}

FiltersContainer.propTypes = {
  markersList: PropTypes.array.isRequired,
  searchInput: PropTypes.string.isRequired,
  isFilterShown: PropTypes.bool.isRequired,
  stateHandler: PropTypes.func.isRequired,
};
