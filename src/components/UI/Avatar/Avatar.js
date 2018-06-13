import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import css from './Avatar.css';

const Avatar = props => (
  <Fragment>
    <img
      alt="avatar"
      className={css.Avatar}
      src={props.src}
      width={props.size[0]}
      height={props.size[1]}
      style={{ borderRadius: props.size[0], border: props.border }}
    />
  </Fragment>
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.arrayOf(PropTypes.number).isRequired,
  border: PropTypes.string.isRequired,
};

export default Avatar;
