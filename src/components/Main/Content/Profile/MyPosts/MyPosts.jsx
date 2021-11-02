import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Posts/Posts";


const MyPosts = () => {
    return <div className={s.my__posts}>
        <div className={s.my__posts_header}>
            <span>My posts</span>
        </div>
        <div className={s.newpost}>
            <p><textarea className={s.comment} cols="40" rows="3"></textarea></p>
        </div>
        <div>
            <button className={s.button__send}>Send</button>
        </div>
        <Posts/>
    </div>
}

export default MyPosts;
