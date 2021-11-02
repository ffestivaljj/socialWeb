import React from 'react';
import s from './Header.module.css';


const Header = () => {
    return <header className={s.header}>
        <a href="#" className={s.header__logo}></a>
        <nav className={s.header__menu}>
            <ul className={s.header__list}>
                <li><a href="#" className={s.header__link}>Music</a></li>
                <li><a href="#" className={s.header__link}>Notifications</a></li>
                <li><a href="#" className={s.header__link}>Stream</a></li>
                <li><a href="#" className={s.header__link}>Search</a></li>
            </ul>
        </nav>
    </header>
}

export default Header;
