import React from 'react'
import s from './Header.css'
import Navigation from './Navigation/Navigation'
import Logo from './Logo/Logo'
import SearchBox from './SearchBox/SearchBox'
import Button from '../UI/Button/Button'
import Avatar from '../UI/Avatar/Avatar'
import mypic from '../../assets/image/mypic.png'

const Header = () => (
    <div className = {s.Header} >
            <Navigation />
            <Logo />
            <SearchBox />
            <Avatar src = {mypic} size = {[34,34]} flex = {`1 1 auto`} />
            <Button btnclass='ButtonNormal' label='Tweet' flex={`1 1 auto`} />
    </div>
)

export default Header;