import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
    <footer>
        <button onClick={() => navigate(-1)} className='footer-button'>Back</button>
        <button onClick={() => navigate(1)} className='footer-button'>Forward</button>
    </footer>
    )
}

export default Footer;