import React from 'react';
import styles from './Contact.module.css'
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className={styles.contact}>
            <h2 className={styles.h2}>Contact Information</h2>
            <p className={styles.p}>If you have any questions, comments(good or bad) about my content <br/>or just want to get in contact with me, <br/> please feel free to contact me via email or through my GitHub.</p>
            <p className={styles.p}><i className="fa-sharp fa-solid fa-envelope"></i>Email:<Link className={styles.links} to="mailto: Breon.curry650@gmail.com">Breon.curry650@gmail.com</Link><br/><i className="fa-brands fa-github"></i>GitHub:<Link className={styles.links} to="https://github.com/Buchan650" target="_blank">https://github.com/Buchan650</Link><br/><i className="fa-solid fa-phone"></i>
            Phone Number:<Link to='tel: 090-5000-7190' className={styles.links}>090-5000-7190</Link><br/></p>
        </div>
    )
}

export default Contact;