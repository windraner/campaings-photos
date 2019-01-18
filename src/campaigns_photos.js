import React, { Component } from 'react';
import FiltersContainer from './components/filters_container/filters_container';
import MainContainer from './components/main_container/main_container';

import * as CONSTANT from './constans';

export default class CampaignsPhotos extends Component {
  constructor() {
    super();
    this.state = {
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
    };
  }

  stateHandler = (field, value) => {
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
