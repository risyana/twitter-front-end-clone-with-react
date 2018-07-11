import React from 'react';
import css from './Tweet.css';
import Avatar from '../../UI/Avatar/Avatar';
import mypic from '../../../assets/image/mypic.png';

const Tweet = () => (
  <div className={css.Tweet}>
    <div className={css.AvatarContainer}>
      <Avatar src={mypic} size={[48, 48]} border="2px solid white" />
    </div>
    <div className={css.ContentContainer}>
      <div className={css.HeaderContainer}>
        <div className={css.Header}>
          <span>JOKO WIDODO </span>
          <span>@joko </span>
          <span>&bull; </span>
          <span>43 min </span>
        </div>
        <i className="fa fa-chevron-down" />
      </div>
      <div className={css.Text}>
        OPEN! 10 #vacancy from Xtremax Teknologi Indonesia as Developer, Engineer, Analyst, Tester,
        HR and Project Executive  http://bit.ly/1ybSMsk  DEADLINE: 30 Jun
      </div>
      <div className={css.ButtonList}>
        <div>
          <i className="far fa-comment" />
          <span>190</span>
        </div>
        <div>
          <i className="fa fa-retweet" />
          <span>5</span>
        </div>
        <div>
          <i className="far fa-heart" />
          <span>1</span>
        </div>
        <div>
          <i className="far fa-envelope" />
          <span> &nbsp; </span>
        </div>
      </div>
    </div>
  </div>
);

export default Tweet;

