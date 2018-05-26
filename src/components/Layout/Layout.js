import React, { Component } from 'react'
import Header from '../Header/Header'
import Card from '../UI/Card/Card'
import css from './Layout.css'
import Profile from '../Profile/Profile'

class Layout extends Component {
    render(){
        return(
            <div className = {css.Layout}>
                <Header/>
                <div className = {css.content}>
                    <div className = {css.profil}>
                        <Card>
                           <Profile/>
                        </Card>
                    </div>
                    <div className={css.trending}>
                        <Card>
                            trending
                        </Card>
                    </div>
                    <div className={css.children}>
                        <Card>
                            {this.props.children}
                        </Card>
                    </div>
                    <div className={css.whoToFollow}>
                        <Card>
                            whoToFollow
                        </Card>
                    </div>
                    <div className={css.footer}>
                        <Card link={['Advertise with Twitter', 'https://ads.twitter.com/?ref=gl-tw-tw-twitter-webtimeline']}>
                            © 2018 Twitter About Help Center Terms Privacy policy Cookies Ads info Brand Blog Status Apps Jobs Marketing Businesses Developers
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;