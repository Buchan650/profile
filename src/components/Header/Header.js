import React from 'react';
import { NavLink } from'react-router-dom';

function Header() {

    return (
        <header>
            <nav className='nav'>
                <h1 id='name'>Breon <span className='last-name' id='lastname'>Curry</span></h1>
                <div className='navside'>
                    <div classsName='navbar-links'>
                        <span><NavLink index className='links' id='about-me'>About me</NavLink ></span>
                        <span><NavLink  to="/skills" className='links' id='skills'>Skills</NavLink ></span>
                        <span><NavLink  to="/projects" className='links' id='projects'>Projects</NavLink ></span>
                        <span><NavLink  to="/contact-info" className='links' id='contact'>Contact Info</NavLink ></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;