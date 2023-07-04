import React from 'react';
import styles from './Footer.module.css';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
    <div className={styles.footer}>
        <button onClick={() => navigate(-1)} className={styles.button}>Back</button>
        <button onClick={() => navigate(1)} className={styles.button}>Forward</button>
    </div>
    )
}

export default Footer;