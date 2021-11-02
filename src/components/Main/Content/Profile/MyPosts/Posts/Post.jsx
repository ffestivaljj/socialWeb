import React from 'react';
import s from './Posts.module.css';

const Post = (props) => {
    return <div className={s.post}>
        <img src="https://news.northeastern.edu/wp-content/uploads/2019/06/Moganasundaram_001-750x0-c-default.jpg"
             alt="" className="avatar"/>
        {props.massage}
        <div className="like">
            <button>Like {props.likes}</button>
        </div>
    </div>


}

export default Post;
