import React, { Component } from 'react';
import PerPageSelector from './per_page_selector/per_page_selector';
import Pagination from './pagination/pagination';
import PropTypes from 'prop-types';

import './bottom_bar.css';

export default class BottomBar extends Component {
  render() {
    const { page, pagesCount, perPage, stateHandler } = this.props;

    return (
      <div className="campaigns-photo__bottom-bar-container d-flex justify-content-between">
        <PerPageSelector
          value={perPage}
          stateHandler={stateHandler}
        />

        <Pagination
          page={page}
          pagesCount={pagesCount}
          stateHandler={stateHandler}
        />
      </div>
    );
  }
}

BottomBar.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
  stateHandler: PropTypes.func.isRequired,
};
