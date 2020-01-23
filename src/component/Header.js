import React from 'react';
import headerStyle from './Header.module.css';
const Header = (props) => {
    return (
        <h1 className={headerStyle.header}>{props.title}</h1>
    )
}

export default Header;