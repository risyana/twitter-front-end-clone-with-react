import React from 'react';
import css from './SearchBox.css';

const SearchBox = () => (
  <div className={css.container}>
    <div className={css.SearchIcon}>
      <i className="fa fa-search" />
    </div>
    <input className={css.SearchBox} type="text" placeholder="search" />
  </div>
);

export default SearchBox;

