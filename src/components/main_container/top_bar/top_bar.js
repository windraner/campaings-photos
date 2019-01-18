import React, { Component } from 'react';
import CustomTopBarCheckbox from '../common/custom_top_bar_checkbox/custom_top_bar_checkbox';
import CustomTopBarSwipeCheckbox from '../common/custom_top_bar_swipe_checkbox/custom_top_bar_swipe_checkbox';
import ViewSwitcher from '../common/view_switcher/view_switcher';

export default class TopBar extends Component {
  render() {
    const { isSelectedAll, isFilterShown, itemsView, switchHandler, stateHandler } = this.props;

    return (
      <div className="d-flex justify-content-between">
        <CustomTopBarCheckbox
          isChecked={isSelectedAll}
          switchHandler={switchHandler}
        />

        <CustomTopBarSwipeCheckbox
          isChecked={isFilterShown}
          switchHandler={switchHandler}
        />

        <ViewSwitcher
          itemsView={itemsView}
          stateHandler={stateHandler}
        />
      </div>
    );
  }
}
