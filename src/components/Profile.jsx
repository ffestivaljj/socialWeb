import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.profile}>
        <div className={s.theme}></div>
        <div className={s.avatar}></div>

        <div className={s.personalData}>
            <div className={s.item}>Anton D.</div>
            <div className={s.item}>Date of Birthday: 27/11/92</div>
            <div className={s.item}>City: NN</div>
            <div className={s.item}>Education: PTY</div>
            <div className={s.item}>Web Cite: <a href='pikabu.ru'>pikabu.ru</a></div>
        </div>

        <div className={s.wall}>
            My posts
            <div className={s.newpost}>
                New post
            </div>
            <div className={s.item}>
                <div className="item">post 1</div>
                <div className="item">post 2</div>
            </div>
        </div>

    </div>
}

export default Profile;
