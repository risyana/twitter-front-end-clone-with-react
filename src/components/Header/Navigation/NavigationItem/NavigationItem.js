import React from 'react';
import PropTypes from 'prop-types';
import css from './NavigationItem.css';
import Spacer from '../../../UI/Spacer/Spacer';

const NavigationItem = (props) => {
  let style = {};

  if (props.active) {
    style = {
      color: '#b07957',
      borderBottom: '#B07957 solid 2px',
    };
  }

  return (
    <li className={css.NavItem}>
      <a href="http://localhost:3000/" className={css.Button} style={style} >
        <i className={props.fa} />
        <Spacer />
        <span className={css.Label}>{props.children}</span>
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  active: PropTypes.bool.isRequired,
  fa: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavigationItem;
