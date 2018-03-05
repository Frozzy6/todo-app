import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react'

import { searchChange } from '../../actions';

let SearchBar = ( ({dispatch, search}) => {
  const handleChange = e =>{
    const input = e.target;
    const val = input.value.trim();

    dispatch(searchChange(val))
  };

  return (
    <Input icon='search'
      placeholder='Search...'
      defaultValue={search}
      onChange={handleChange} />
  );
});

const mapStateToProps = (state) => {
  return {
    search: state.mutations.search
  }
}

SearchBar.propTypes = {
  search: PropTypes.string
}

SearchBar = connect(mapStateToProps)(SearchBar);



export default SearchBar;
