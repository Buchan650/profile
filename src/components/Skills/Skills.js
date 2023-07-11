import React from 'react';
import Certificate from './Certificate.png';
import Japan from '../Japan-flag.png';
import America from '../American-flag.png';
import { useState } from 'react';

export default function Skills() {
    const english = 'Skills';
    const englishSkills = <p>Through Codecademy, I am currently working towards my certification to 
    become a front-end engineer. With the help of Codecademy I have become 
    proficient in the tools necessary to become an effective web designer.
</p>
    const japanese = 'スキル';
    const japaneseSkills = <p>私は現在、Codecademyを通じて、フロントエンドエンジニアに
        なるための資格取得に向けて取り組んでいます。Codecademyの助けを借りて、私は実用的な
        ウェブデザイナーになるために必要なツールに熟達しました。</p>;

    const [title, setTitle] = useState(english);
    const [skills, setSkills] = useState(englishSkills);
    function handleJapaneseClick() {
        setTitle(japanese);
        setSkills(japaneseSkills);
    }
    function handleEnglishClick() {
        setTitle(english);
        setSkills(englishSkills);
    }


    return (
    <div className='skills'>
        <h2>{title}{title === english ? <img className='flag' src={Japan} alt='Japanese flag' onClick={handleJapaneseClick}/> : <img className='flag' src={America} alt='American flag' onClick={handleEnglishClick}/>}</h2>
        {skills}
        <div className='container'>
            <div className='languages'>
                <div className='language-container'>
                    <i className="fa-brands fa-html5"></i>
                    <h3>HTML</h3>
                </div>
                <div className='language-container'>
                    <i className="fa-brands fa-css3-alt"></i>
                    <h3>CSS</h3>
                </div>
                <div className='language-container'>
                    <i className="fa-brands fa-square-js"></i>
                    <h3>JavaScript</h3>
                </div >
                <div className='language-container'>
                    <i className="fa-brands fa-git"></i>
                    <h3>Git</h3>
                </div>
                <div className='language-container'>
                    <i className="fa-brands fa-github"></i>
                    <h3>GitHub</h3>
                </div>
                <div className='language-container'>
                    <i className="fa-brands fa-node"></i>
                    <h3>Node</h3>
                </div>
                <div className='language-container'>
                    <i className="fa-brands fa-react"></i>
                    <h3>React</h3>  
                </div>
            </div>
            <div>
              <img className='certificate' src={Certificate} alt='Codecademy Certificate'/>  
            </div>
        </div>
    </div>
    )
}