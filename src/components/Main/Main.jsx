import React from 'react';
import s from './Main.module.css';
import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";


const Main = () => {
    return <main className={s.main}>
        <Navbar/>
        <Content/>
    </main>
}

export default Main;
