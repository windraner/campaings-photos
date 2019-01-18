import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ITEMS_VIEW, TYPES_ITEMS_VIEW } from '../../../../constans';

import './view_switcher.css';

const ViewSwitcher = (props) => {
  const { itemsView, stateHandler } = props;
  return (
    <Fragment>
      <div
        style={itemsView === TYPES_ITEMS_VIEW[1] ? {color: '#f67646'} : {color: '#b7c0cd'}}
        className="campaigns-photos__viewSwitcher-grid d-flex align-items-center justify-content-center ml-3"
        onClick={() => stateHandler(ITEMS_VIEW, TYPES_ITEMS_VIEW[1])}
      />

      <div
        className="campaigns-photos__viewSwitcher-list d-flex flex-column justify-content-between"
        onClick={() => stateHandler(ITEMS_VIEW, TYPES_ITEMS_VIEW[0])}
      >
        <span
          style={itemsView === TYPES_ITEMS_VIEW[0] ? {background: '#f67646'} : {background: '#b7c0cd'}}
          className="campaigns-photos__viewSwitcher-line"
        />
        <span
          style={itemsView === TYPES_ITEMS_VIEW[0] ? {background: '#f67646'} : {background: '#b7c0cd'}}
          className="campaigns-photos__viewSwitcher-line"
        />
        <span
          style={itemsView === TYPES_ITEMS_VIEW[0] ? {background: '#f67646'} : {background: '#b7c0cd'}}
          className="campaigns-photos__viewSwitcher-line"
        />
      </div>
    </Fragment>
  );
};

ViewSwitcher.propTypes = {
  itemsView: PropTypes.string.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default ViewSwitcher;
