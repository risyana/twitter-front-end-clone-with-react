import React from 'react';
import Tweet from './Tweet/Tweet';
import ComposeTweet from './ComposeTweet/ComposeTweet';

const Home = () => (
  <div>
    <ComposeTweet />
    <Tweet />
    <Tweet />
    <Tweet />
  </div>
);

export default Home;
