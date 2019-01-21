import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { customHistoryPush } from '../../../../utils';
import { PAGE } from '../../../../constans';

import './pagination.css';

export default class Pagination extends Component {

  renderPrevButton = () => {
    const { page } = this.props;
    let className = 'campaigns-photos__pagination-button campaigns-photos__pagination-button-prev position-relative';
    if(page === 1) {
      className += ' campaigns-photos__pagination-button__disabled';
    }

    return (
      <div
        className={className}
        onClick={page > 1 ? () => this.onPageClickHandler(page - 1) : null}
      >
        <span className="campaigns-photos__pagination-left-icon" />
        Prev
      </div>
    );
  }

  renderPages = () => {
    const { page, pagesCount } = this.props;

    let pagesList = new Array(pagesCount).fill(null).map((item, i) => i + 1);

    if(pagesCount > 7) {
      if(page <= 4) {
        pagesList = pagesList.slice(0, 5);
        pagesList.push('...');
        pagesList.push(pagesCount);
      } else if(page > 3 && page < pagesCount - 3) {
        pagesList = [];
        pagesList.push(1);
        pagesList.push('...');
        pagesList.push(page - 1, page, page + 1);
        pagesList.push('...');
        pagesList.push(pagesCount);
      } else if(page >= pagesCount - 3) {
        pagesList = pagesList.slice(pagesCount - 5);
        pagesList.unshift('...');
        pagesList.unshift(1);
      }
    }

    pagesList = pagesList.map((item, i) => {
      let className = 'campaigns-photos__pagination-page';
      if(item === page) {
        className += ' campaigns-photos__pagination-page__active';
      }

      if(item === '...') {
        return (
          <div
            key={i}
            className="campaigns-photos__pagination-separator"
          >
            ...
          </div>
        );
      }

      return (
        <div
          key={i}
          className={className}
          onClick={page !== item ? () => this.onPageClickHandler(item) : null}
        >
          {item}
        </div>
      );
    });

    return pagesList;
  }

  renderNextButton = () => {
    const { page, pagesCount } = this.props;
    let className = 'campaigns-photos__pagination-button campaigns-photos__pagination-button-next position-relative';

    if(page === pagesCount) {
      className += ' campaigns-photos__pagination-button__disabled';
    }

    return (
      <div
        className={className}
        onClick={page < pagesCount ? () => this.onPageClickHandler(page + 1) : null}

      >
        Next
        <span className="campaigns-photos__pagination-right-icon" />
      </div>
    );
  }

  onPageClickHandler = (value) => {
    const { stateHandler } = this.props;
    stateHandler(PAGE, +value);

    customHistoryPush('page', value);
  }

  render() {
    const { pagesCount } = this.props;

    if(!pagesCount || pagesCount <= 1) {
      return null;
    }

    return (
      <div className="d-flex">
        {this.renderPrevButton()}

        {this.renderPages()}

        {this.renderNextButton()}
      </div>
    );
  }
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
  stateHandler: PropTypes.func.isRequired,
};
