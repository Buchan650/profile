import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Root.module.css';

function Root() {
    return (
        <>
            <Header />
                <main>
                    <Outlet/>
                </main>
            <Footer />
        </>
        
    )
}

export default Root;