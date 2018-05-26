import React, { Fragment } from 'react'
import Avatar from '../UI/Avatar/Avatar'
import mypic from '../../assets/image/mypic.png'
import cover from '../../assets/image/cover.jpg'
import css from './Profile.css'

const Profile = () => {
    return (
        <Fragment  >
            <div className = {css.coverImage}>
                <img src = {cover} /> 
            </div>
            <div className = {css.avatar}>
                <Avatar src = {mypic} size = {[64,64]} border = {'2px solid white'}/>
            </div>
            <div className = {css.username}>
                <span>Eka RP</span>
                <span>@risyana</span>
            </div>
            <div className = {css.tweet}>
                <span>Tweet</span>
                <span>480</span>
            </div>
            <div className = {css.following} >
                <span>Following</span>
                <span>10</span>
            </div>
            <div className = {css.follower} >
                <span>Follower</span>
                <span>1900</span>
            </div>
        </Fragment>
    )
}

export default Profile;