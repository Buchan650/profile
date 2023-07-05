import { React, useState } from 'react';
import { NavLink } from'react-router-dom';

function Header() { 
    const [open, setOpen] = useState(false);
    function handleOpen() {
        setOpen(!open);
    }

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
                <div className='dropdown'>
                    <button className='dd-title' onClick={handleOpen}><i id='hamburger' class="fa-solid fa-bars"></i></button>
                    {open? (
                    <div className='menu'>
                        <NavLink index className='menu-item'><button>About Me</button></NavLink>
                        <NavLink to="/skills" className='menu-item'><button>Skills</button></NavLink>
                        <NavLink to="/projects" className='menu-item'><button>Projects</button></NavLink>
                        <NavLink to="/contact-info" className='menu-item'><button>Contact Info</button></NavLink>
                    </div>
                    ) : null}
                </div>
            </nav>
        </header>
    )
}

export default Header;