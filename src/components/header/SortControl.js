import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react'

import { setSort } from '../../actions';
import {
  SORT_BY_ADD_ORDER,
  SORT_BY_ALPHABET_REVERSED
} from '../../constants';

let SortControl = ( ({dispatch, sort}) => {
  const handleClick = e => {
    const sortToSet = (sort === SORT_BY_ADD_ORDER ? SORT_BY_ALPHABET_REVERSED : SORT_BY_ADD_ORDER);
    dispatch(setSort(sortToSet));
  };

  return (
    <Icon
      name="sort alphabet descending"
      onClick={handleClick}
      className={"sort-alphabet-icon " + (sort === SORT_BY_ALPHABET_REVERSED && "sort-alphabet-icon_active" ) }
    />
  );
});

const mapStateToProps = (state) => {
  return {
    sort: state.mutations.sort
  }
}

SortControl.propTypes = {
  sort: PropTypes.string.isRequired
}

SortControl = connect(mapStateToProps)(SortControl)


export default SortControl;
