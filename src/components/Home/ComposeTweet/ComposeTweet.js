import React from 'react';
import css from './ComposeTweet.css';
import Avatar from '../../UI/Avatar/Avatar';
import mypic from '../../../assets/image/mypic.png';

const PLACEHOLDER = "What's happening?";
const ComposeTweet = () => (
  <div className={css.ComposeTweet}>
    <div className={css.AvatarContainer}>
      <Avatar src={mypic} size={[32, 32]} border="2px solid white" />
    </div>
    <div className={css.ContentContainer}>
      <div className={css.Text}>
        <textarea
          placeholder={PLACEHOLDER}
        />
      </div>
      <div className={css.ButtonList}>
        <div className={css.option}>
          <i className="far fa-image" />
        </div>
        <div className={css.option}>
          <i className="far fa-images" />
        </div>
        <div className={css.option}>
          <i className="far fa-chart-bar" />
        </div>
        <div className={css.option}>
          <i className="fa fa-map-marker-alt" />
        </div>
        <div>
          &nbsp;
        </div>
        <div>
          <button className={css.PlusButton}>
            +
          </button>
        </div>
        <div>
          <button className={css.TweetButton}>
            Tweet
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ComposeTweet;

