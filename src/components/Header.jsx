import React from 'react';
import s from './Header.module.css';


const Header = () => {
    return <header className={s.header}>
        <img src='https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png'/>
    </header>
}

export default Header;
