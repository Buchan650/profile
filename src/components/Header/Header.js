import React from 'react';
import { NavLink } from'react-router-dom';
import styles from './Header.module.css';
import Japan from './Japan-flag-icon-on-transparent-background-PNG.png';

function Header() {
    function handleClick() {
        document.getElementById('about-me').innerHTML = '自分について';
        document.getElementById('skills').innerHTML = 'スキル';
        document.getElementById('projects').innerHTML = '作品';
        document.getElementById('contact').innerHTML = '連絡先';
        document.getElementById('about-me').innerHTML = '自分について';
        document.getElementById('name').innerHTML = 'カリー ブリオン';

    };
    return (
        <header>
            <nav className={styles.nav}>
                <h1 className={styles.h1} id='name'>Breon <span className={styles.lastname} id='lastname'>Curry</span></h1>
                <div className={styles.navside}>
                    <div classsName={styles.navbarlinks}>
                        <span><NavLink index className={styles.links} id='about-me'>About me</NavLink ></span>
                        <span><NavLink  to="/skills" className={styles.links} id='skills'>Skills</NavLink ></span>
                        <span><NavLink  to="/projects" className={styles.links} id='projects'>Projects</NavLink ></span>
                        <span><NavLink  to="/contact-info" className={styles.links} id='contact'>Contact Information</NavLink ></span>
                        <img src={Japan} onClick={handleClick}/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
