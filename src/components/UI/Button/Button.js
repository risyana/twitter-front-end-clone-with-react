import React from 'react'
import css from './Button.css'

const Button = (props) => (
    <button className = {css[props.btnclass]} >
        {props.label}
    </button>
)

export default Button