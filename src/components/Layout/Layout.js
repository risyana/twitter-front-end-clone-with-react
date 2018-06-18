import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Card from '../UI/Card/Card';
import css from './Layout.css';
import Profile from '../Profile/Profile';
import Trending from '../Trending/Trending';

const TRENDS = [{
  trend: '#EkaCakep',
  number: 1000,
}, {
  trend: '#Makan',
  number: 1111,
}, {
  trend: 'Eka Risyana',
  number: 2303,
}, {
  trend: 'Hello',
  number: 1013,
}, {
  trend: 'Hello',
  number: 1013,
}, {
  trend: 'Hello',
  number: 1013,
}, {
  trend: 'Hello',
  number: 1013,
}, {
  trend: 'Hello',
  number: 1013,
}];

const Layout = props => (
  <div className={css.Layout}>
    <Header />
    <div className={css.content}>
      <div className={css.leftbar}>
        <div className={css.profil}>
          <Card>
            <Profile />
          </Card>
        </div>
        <div className={css.trending}>
          <Card>
            <Trending
              title="Indonesia Trending"
              trends={TRENDS}
            />
          </Card>
        </div>
      </div>
      <div className={css.children}>
        <Card>
          {props.children}
        </Card>
      </div>
      <div className={css.rightbar}>
        <div className={css.whoToFollow}>
          <Card padding="10px">
            whoToFollow
          </Card>
        </div>
        <div className={css.footer} >
          <Card
            padding="10px"
            link={['Advertise with Twitter', 'https://ads.twitter.com/?ref=gl-tw-tw-twitter-webtimeline']}
          >
            © 2018 Twitter About Help Center Terms Privacy policy Cookies Ads
             info Brand Blog Status Apps Jobs Marketing Businesses Developers
          </Card>
        </div>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
