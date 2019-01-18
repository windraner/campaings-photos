import React, { Component } from 'react';
import TopBar from './top_bar/top_bar';

import './main_container.css';

export default class MainContainer extends Component {
  render() {
    const { isSelectedAll, isFilterShown, itemView, switchHandler } = this.props;

    return (
      <div className="campaigns-photos__main-container">
        <TopBar
          isSelectedAll={isSelectedAll}
          isFilterShown={isFilterShown}
          itemView={itemView}
          switchHandler={switchHandler}
        />
      </div>
    );
  }
}
