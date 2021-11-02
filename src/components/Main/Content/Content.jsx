import React from 'react';
import s from './Content.module.css';
import Profile from "./Profile/Profile"
import Dialogs from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Friends from "./Friends/Friends";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";


const Content = () => {
    return (
        <div className={s.content}>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/friends" component={Friends}/>
            <Route exact path="/messages" component={Dialogs}/>
            <Route exact path="/music" component={Music}/>
            <Route exact path="/settings" component={Settings}/>
        </div>
    )
}

export default Content;
