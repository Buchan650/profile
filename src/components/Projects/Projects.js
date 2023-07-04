import React from 'react';
import styles from './Projects.module.css';
import { Link } from 'react-router-dom';
import Github from './github.com_Buchan650.png';
import Portfolio from './portfolio project.png';
import Personal from './buchan650.github.io_.png';
import Boxing from './buchan650.github.io_boxing_studio_.png';
import JiuJitsu from './buchan650.github.io_jiujitsu_club_.png';
import ArtStore from './Dasmoto.png';

export default function Projects() {
    return (
        <div className={styles.projects}>
            <h2 className={styles.h2}>Projects</h2>
            <p className={styles.p}>I have created a number of projects that I hope demonstrate my current 
                    skill set as a web designer. Please, take a look and I hope you are 
                    impressed by what you see.</p>
            <div className={styles.projcontainer}>
                <article className={styles.proj}>
                        <p>GitHub Profile</p>
                        <Link to="https://github.com/Buchan650" target="_blank"><img src={Github}/></Link>
                        
                </article>
                <article className={styles.proj}>
                    <p>Portfolio Page</p>
                    <Link to="https://buchan650.github.io/portfolio_project/" target="_blank"><img src={Portfolio}/></Link>
                    <Link to="https://github.com/Buchan650/portfolio_project" target="_blank"><button className={styles.button}><span>Repository  </span></button></Link>
                </article>
                <article className={styles.proj}>
                    <p>Personal Page</p>
                    <Link to="https://buchan650.github.io/" target="_blank"><img src={Personal}/></Link>
                    <Link to="https://github.com/Buchan650/buchan650.github.io" target="_blank"><button className={styles.button}><span>Repository  </span></button></Link>
                </article>
                <article className={styles.proj}>
                    <p>Boxing Gym</p>
                    <Link to="https://buchan650.github.io/boxing_studio/" target="_blank"><img src={Boxing}/></Link>
                    <Link to="https://github.com/Buchan650/boxing_studio" target="_blank"><button className={styles.button} ><span>Repository  </span></button></Link>
                </article>
                <article className={styles.proj}>
                    <p>Jiu Jitsu Club</p>
                    <Link to="https://buchan650.github.io/jiujitsu_club/" target="_blank"><img src={JiuJitsu}/></Link>
                    <Link to="https://github.com/Buchan650/jiujitsu_club" target="_blank"><button className={styles.button} ><span>Repository  </span></button></Link>
                </article>
                <article className={styles.proj}>
                    <p>Art Store(Repository only)</p>
                    <img src={ArtStore}/>
                    <Link to="https://github.com/Buchan650/Dasmoto" target="_blank"><button className={styles.button} ><span>Repository  </span></button></Link>
                </article>
            </div>
        </div>
        )
    }