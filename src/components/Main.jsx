import React from 'react';
import s from './Main.module.css';
import Navbar from "./Navbar";
import Content from "./Content";


const Main = () => {
    return <main className={s.main}>
        <Navbar/>
        <Content/>
    </main>
}

export default Main;
