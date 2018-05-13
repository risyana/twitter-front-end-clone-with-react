import React, { Fragment } from 'react'
import css from './Avatar.css'

const Avatar = (props) => (
    <Fragment>
        <img 
            className = {css.Avatar}
            src = {props.src} 
            width = {props.size[0]} 
            height = {props.size[1]}
            style={{'borderRadius': props.size[0]}}
        />
    </Fragment>
)

export default Avatar;