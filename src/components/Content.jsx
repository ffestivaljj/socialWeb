import React from 'react';
import s from './Content.module.css';
import Profile from "./Profile"


const Content = () => {
    return <div className={s.content}>
        <Profile />
    </div>

}

export default Content;
