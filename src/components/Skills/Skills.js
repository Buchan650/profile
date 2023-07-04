import React from 'react';
import styles from './Skills.module.css';
import Certificate from './Certificate.png';

export default function Skills() {
    return (
    <div className={styles.skills}>
        <h2 className={styles.h2}>Skills</h2>
        <p className={styles.p}>Through Codecademy, I am currently working towards my certification to 
                    become a front-end engineer. With the help of Codecademy I have become 
                    proficient in the tools necessary to become an effective web designer.
        </p>
        <div className={styles.container}>
            <div className={styles.languges}>
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-square-js"></i>
                <i className="fa-brands fa-git"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-node"></i>
                <i className="fa-brands fa-react"></i>
            </div>
            <div>
              <img src={Certificate} alt='Codecademy Certificate'/>  
            </div>
        </div>
    </div>
    )
}