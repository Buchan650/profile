import React from 'react';
import styles from './AboutMe.module.css';
import Breon from './Breon.jpg';


function AboutMe() {
    return (
        <div className={styles.intro}>
                <div className={styles.aboutme}>
                    <div className={styles.textcontainer}>
                        <h2 className={styles.h2}>About me</h2>
                        <p className={styles.p}>Hello, everyone! My name is Breon Dante Curry, I am 39 years old 
                    and I am an aspiring  web designer living in Gifu, Japan. I have 
                    lived in Japan for almost 16 years, one year as an exchange student 
                    at Hirosaki University and 15 as an English teacher. I’ve always 
                    had a love for computers and as of March 2023, I decided to make a 
                    career change and began learning  the necessary skills to become a 
                    front-end engineer. My hobbies include Brazilian Jiu Jitsu, weight 
                    training, running, reading and of course coding.</p>
                    </div>
                    <img src={ Breon } alt='Breon Curry'/>
                </div>
        </div>
    )
}

export default AboutMe;