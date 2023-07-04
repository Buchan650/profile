import React from 'react';
import { Link } from 'react-router-dom';
import Github from './github.com_Buchan650.png';
import Portfolio from './portfolio project.png';
import Personal from './buchan650.github.io_.png';
import Boxing from './buchan650.github.io_boxing_studio_.png';
import JiuJitsu from './buchan650.github.io_jiujitsu_club_.png';
import ArtStore from './Dasmoto.png';
import Japan from '../Japan-flag.png';
import America from '../American-flag.png';
import { useState } from 'react';

export default function Projects() {
    const japanese = '作品';
    const japaneseProjects = <p>自分のプログラミングレベルを見せる為に様々な
        作品を制作しました。是非ご覧下さい。</p>;
        const english = 'Projects';
        const englishProjects = <p>I have created a number of projects that I hope demonstrate my current 
        skill set as a web designer. Please, take a look and I hope you are 
        impressed by what you see.</p>
    const [title, setTitle] = useState(english);
    const [projects, setProjects] = useState(englishProjects);

    function handleJapaneseClick() {
        setTitle(japanese);
        setProjects(japaneseProjects);
    }

    function handleEnglishClick() {
        setTitle(english);
        setProjects(englishProjects);
    }

    return (
        <div className='projects'>
            <h2>{title}{title === english ? <img className='flag' src={Japan} alt='Japanese flag' onClick={handleJapaneseClick}/> : <img className='flag' src={America} alt='American flag' onClick={handleEnglishClick}/>}</h2>
            {projects}
            <div className='proj-container'>
                <article className='proj'>
                        <p>GitHub Profile</p>
                        <Link to="https://github.com/Buchan650" target="_blank"><img src={Github}/></Link>
                        
                </article>
                <article className='proj'>
                    <p>Portfolio Page</p>
                    <Link to="https://buchan650.github.io/portfolio_project/" target="_blank"><img src={Portfolio}/></Link>
                    <Link to="https://github.com/Buchan650/portfolio_project" target="_blank"><button className='button'><span>Repository  </span></button></Link>
                </article>
                <article className='proj'>
                    <p>Personal Page</p>
                    <Link to="https://buchan650.github.io/" target="_blank"><img src={Personal}/></Link>
                    <Link to="https://github.com/Buchan650/buchan650.github.io" target="_blank"><button className='button'><span>Repository  </span></button></Link>
                </article>
                <article className='proj'>
                    <p>Boxing Gym</p>
                    <Link to="https://buchan650.github.io/boxing_studio/" target="_blank"><img src={Boxing}/></Link>
                    <Link to="https://github.com/Buchan650/boxing_studio" target="_blank"><button className='button'><span>Repository  </span></button></Link>
                </article>
                <article className='proj'>
                    <p>Jiu Jitsu Club</p>
                    <Link to="https://buchan650.github.io/jiujitsu_club/" target="_blank"><img src={JiuJitsu}/></Link>
                    <Link to="https://github.com/Buchan650/jiujitsu_club" target="_blank"><button className='button'><span>Repository  </span></button></Link>
                </article>
                <article className='proj'>
                    <p>Art Store(Repository only)</p>
                    <img src={ArtStore}/>
                    <Link to="https://github.com/Buchan650/Dasmoto" target="_blank"><button className='button'><span>Repository  </span></button></Link>
                </article>
            </div>
        </div>
        )
    }