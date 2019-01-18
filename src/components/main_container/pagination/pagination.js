import React, { Component } from 'react';
import PerPageSelector from './per_page_selector/per_page_selector';

import { PAGE } from '../../../constans';

import './pagination.css';

export default class Pagination extends Component {
  render() {
    const { page, perPage, stateHandler } = this.props;

    return (
      <div className="campaigns-photo__pagination-container">
        <PerPageSelector
          value={perPage}
          stateHandler={stateHandler}
        />
      </div>
    );
  }
}
