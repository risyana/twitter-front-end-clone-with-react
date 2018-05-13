import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import css from './Navigation.css'


const Navigation = () => (
    <nav className = {css.nav}>
        <ul className = {css.ul} >
            <NavigationItem fa = 'fa fa-home' active>Home</NavigationItem>
            <NavigationItem fa = 'fa fa-bell'>Notification</NavigationItem>
            <NavigationItem fa = 'fa fa-envelope'>Message</NavigationItem>
        </ul>
    </nav>
)

export default Navigation;