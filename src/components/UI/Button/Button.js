import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.css';

const Button = props => (
  <button className={css[props.btnclass]} >
    {props.label}
  </button>
);

Button.propTypes = {
  btnclass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;

