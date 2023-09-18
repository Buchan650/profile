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
                <NavLink className="h1" index><h1 id='name'>Breon <span className='last-name' id='lastname'>Curry</span></h1></NavLink>
                <div className='navside'>
                    <div classsName='navbar-links'>
                        <span><NavLink index className='links' >About me</NavLink ></span>
                        <span><NavLink  to="/skills" className='links'>Skills</NavLink ></span>
                        <span><NavLink  to="/portfolio" className='links'>Portfolio</NavLink ></span>
                        <span><NavLink  to="/contact-info" className='links'>Contact Info</NavLink ></span>
                    </div>
                </div>
                <div className='dropdown'>
                    <button className='dd-title' onClick={handleOpen}><i id='hamburger' class="fa-solid fa-bars"></i></button>
                    {open? (
                    <div className='menu'>
                        <NavLink index className='menu-item'><button onClick={handleOpen}>About Me</button></NavLink>
                        <NavLink to="/skills" className='menu-item' ><button onClick={handleOpen}>Skills</button></NavLink>
                        <NavLink to="/portfolio" className='menu-item'><button onClick={handleOpen}>Portfolio</button></NavLink>
                        <NavLink to="/contact-info" className='menu-item'><button onClick={handleOpen}>Contact Info</button></NavLink>
                    </div>
                    ) : null}
                </div>
            </nav>
        </header>
    )
}

export default Header;