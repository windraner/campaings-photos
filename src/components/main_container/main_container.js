import React from 'react';
import TopBar from './top_bar/top_bar';
import Pagination from './pagination/pagination';
import PropTypes from 'prop-types';

import './main_container.css';

const MainContainer = (props) => {
  const { isSelectedAll, isFilterShown, itemsView, page, perPage, switchHandler, stateHandler } = props;
  return (
    <div className="campaigns-photos__main-container">
      <TopBar
        isSelectedAll={isSelectedAll}
        isFilterShown={isFilterShown}
        itemsView={itemsView}
        switchHandler={switchHandler}
        stateHandler={stateHandler}
      />

      <Pagination
        page={page}
        perPage={perPage}
        stateHandler={stateHandler}
      />
    </div>
  );
};

MainContainer.propTypes = {
  isSelectedAll: PropTypes.bool.isRequired,
  isFilterShown: PropTypes.bool.isRequired,
  itemsView: PropTypes.string.isRequired,
  switchHandler: PropTypes.func.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default MainContainer;
