import React from 'react';
import TopBar from './top_bar/top_bar';
import BottomBar from './bottom_bar/bottom_bar';
import PropTypes from 'prop-types';

import './main_container.css';

const MainContainer = (props) => {
  const { loading, isSelectedAll, isFilterShown, itemsView, page, perPage, pagesCount, switchHandler, stateHandler } = props;
  return (
    <div className="campaigns-photos__main-container">
      <TopBar
        isSelectedAll={isSelectedAll}
        isFilterShown={isFilterShown}
        itemsView={itemsView}
        switchHandler={switchHandler}
        stateHandler={stateHandler}
      />

      <BottomBar
        page={page}
        perPage={perPage}
        pagesCount={pagesCount}
        stateHandler={stateHandler}
      />
    </div>
  );
};

MainContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSelectedAll: PropTypes.bool.isRequired,
  isFilterShown: PropTypes.bool.isRequired,
  itemsView: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
  switchHandler: PropTypes.func.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default MainContainer;
