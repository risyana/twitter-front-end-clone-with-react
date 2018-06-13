import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import s from './Trending.css';

const Trending = props => (
  <Fragment>
    <h4 className={s.h4}>{props.title}</h4>
    <div className={s.listContainer} >
      {props.trends.map(trend => (
        <div className={s.list}>
          <div>{trend.trend}</div>
          <div>{`${trend.number} Tweets`}</div>
        </div>
      ))}
    </div>
  </Fragment>
);

Trending.propTypes = {
  title: PropTypes.string.isRequired,
  trends: PropTypes.arrayOf(PropTypes.shape({
    trend: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  })).isRequired,
};

export default Trending;
