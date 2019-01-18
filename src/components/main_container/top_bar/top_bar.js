import React from 'react';
import CustomTopBarCheckbox from './custom_top_bar_checkbox/custom_top_bar_checkbox';
import CustomTopBarSwipeCheckbox from './custom_top_bar_swipe_checkbox/custom_top_bar_swipe_checkbox';
import ViewSwitcher from './view_switcher/view_switcher';
import PropTypes from 'prop-types';

const TopBar = (props) => {
  const { isSelectedAll, isFilterShown, itemsView, switchHandler, stateHandler } = props;
  return (
    <div className="d-flex justify-content-between px-4 pb-3">
      <CustomTopBarCheckbox
        isChecked={isSelectedAll}
        switchHandler={switchHandler}
      />

      <div className="d-flex justify-content-between">
        <CustomTopBarSwipeCheckbox
          isChecked={isFilterShown}
          switchHandler={switchHandler}
        />

        <ViewSwitcher
          itemsView={itemsView}
          stateHandler={stateHandler}
        />
      </div>
    </div>
  );
};

TopBar.propTypes = {
  isSelectedAll: PropTypes.bool.isRequired,
  isFilterShown: PropTypes.bool.isRequired,
  itemsView: PropTypes.string.isRequired,
  switchHandler: PropTypes.func.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default TopBar;
