import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
    <footer>
        <button onClick={() => navigate(-1)} className='footer-button'><i class="fas fa-chevron-left"></i></button>
        <button onClick={() => navigate(1)} className='footer-button'><i class="fas fa-chevron-right"></i></button>
    </footer>
    )
}

export default Footer;