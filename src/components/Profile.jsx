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
            <span>My posts</span>

            <div className={s.newpost}>
                <p><textarea className={s.comment} cols="40" rows="3"></textarea></p>
            </div>
            <div>
                <button className={s.button__send}>Send</button>
            </div>
            <div className={s.wall__posts}>
                <div className={s.wall__post}>post 1</div>
                <div className={s.wall__post}>post 2</div>
            </div>
        </div>

    </div>
}

export default Profile;
