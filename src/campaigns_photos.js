import React, { Component } from 'react';
import FiltersContainer from './components/filters_container/filters_container';
import MainContainer from './components/main_container/main_container';
import queryString from 'query-string';

import * as CONSTANT from './constans';

export default class CampaignsPhotos extends Component {
  constructor() {
    super();
    this.state = {
      [CONSTANT.LOADING]: true,
      [CONSTANT.SEARCH_INPUT]: '',
      [CONSTANT.IS_SELECTED_ALL]: false,
      [CONSTANT.IS_FILTER_SHOWN]: true,
      [CONSTANT.ITEMS_VIEW]: CONSTANT.TYPES_ITEMS_VIEW[0],
      [CONSTANT.MARKERS_LIST]: [
        {
          id: 'all',
          name: 'Show all',
          isChecked: false,
          type: 'all',
          count: 0
        },
        {
          id: 'pending',
          name: 'Pending',
          isChecked: false,
          type: 'main',
          count: 0
        },
        {
          id: 'approved',
          name: 'Approved',
          isChecked: false,
          type: 'main',
          count: 0
        },
        {
          id: 'rejected',
          name: 'Rejected',
          isChecked: false,
          type: 'main',
          count: 0
        },
        {
          id: 'rightsRequested',
          name: 'Rights requested',
          isChecked: false,
          type: 'main',
          count: 0
        },
        {
          id: 'sticly',
          name: 'Sticly',
          isChecked: false,
          type: 'main',
          count: 0
        },
        {
          id: 'topPhotos',
          name: 'Top photos',
          isChecked: false,
          type: 'secondary',
          count: 0
        },
        {
          id: 'unhealthy',
          name: 'Unhealthy products',
          isChecked: false,
          type: 'secondary',
          count: 0
        },
      ],
      [CONSTANT.PAGE]: 1,
      [CONSTANT.PAGE_COUNT]: 10,
      [CONSTANT.PER_PAGE]: CONSTANT.PER_PAGE_LIST[0],
    };
  }

  componentDidMount() {
    const parsed = queryString.parse(location.search);
    if(parsed.page) {
      this.setState({ [CONSTANT.PAGE]: +parsed.page });
    }

    this.fetchData();
  }

  fetchData = () => {
    setTimeout(() => this.setState({ [CONSTANT.LOADING]: false }), 1000);
  }

  stateHandler = (field, value) => {
    window.console.log(field, value);
    this.setState({ [field]: value });
  }

  switchHandler = (field) => {
    this.setState({ [field]: !this.state[field] });
  }

  render() {
    return (
      <div className="d-flex">
        <FiltersContainer
          {...this.state}
          stateHandler={this.stateHandler}
        />

        <MainContainer
          {...this.state}
          switchHandler={this.switchHandler}
          stateHandler={this.stateHandler}
        />
      </div>
    );
  }
}
