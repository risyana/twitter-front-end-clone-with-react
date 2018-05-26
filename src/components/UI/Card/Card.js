import React from 'react'
import css from './Card.css'

const Card = (props) => {


return (
    <div className = {css.container}>
        <div className = {css.content} style = {{padding:props.padding}}>
            {props.children}
        </div>
        {props.link ?
        <div className = {css.footer}>
            <a href = {props.link[1]} >
                {props.link[0]}
            </a>
        </div> : null}
    </div>
    )
}

export default Card;