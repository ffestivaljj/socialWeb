import React from 'react';
import s from './Posts.module.css';

const Posts = () => {
    return <div className={s.posts}>

        <div className={s.wall__posts}>
            <div className={s.wall__post}>post 1</div>
            <div className={s.wall__post}>post 2</div>
        </div>


    </div>
}

export default Posts;
