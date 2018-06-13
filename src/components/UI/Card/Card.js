import React from 'react';
import PropTypes from 'prop-types';
import css from './Card.css';

const Card = props => (
  <div className={css.container}>
    <div className={css.content} style={{ padding: props.padding }}>
      {props.children}
    </div>
    {props.link ?
      <div className={css.footer}>
        <a href={props.link[1]} >
          {props.link[0]}
        </a>
      </div> : null}
  </div>
);

Card.propTypes = {
  padding: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
