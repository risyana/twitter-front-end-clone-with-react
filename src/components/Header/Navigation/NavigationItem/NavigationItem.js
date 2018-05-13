import React from 'react';
import css from './NavigationItem.css'
import Spacer from '../../../UI/Spacer/Spacer'

const NavigationItem = (props) => {
    
    let style = {}

    if(props.active){
        style = {
            "color": "#b07957",
            "borderBottom": "#B07957 solid 2px"
        }
    }
    
    return (
        <li className={css.NavItem}>
            <a href='#' className={css.Button} style = {style} >
                <i className={props.fa} ></i>
                <Spacer />
                <span className={css.Label}>{props.children}</span>
            </a>
        </li>
    )
}

export default NavigationItem;