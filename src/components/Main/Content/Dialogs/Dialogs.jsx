import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog__items}>
                <div className={s.item}>
                    <NavLink to='/messages/1' activeClassName={s.active} >Anton</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/messages/2' activeClassName={s.active} >Piton</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/messages/3' activeClassName={s.active}>Baton</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello, Anton</div>
                <div className={s.message}>Hello, Piton</div>
                <div className={s.message}>Hello, Baton</div>
            </div>
        </div>
    )
}

export default Dialogs;
