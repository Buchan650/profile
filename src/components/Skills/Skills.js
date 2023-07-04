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
    const japaneseSkills = <p>コードキャデミーを通して、
        フロントエンジニアの資格を取ろうとしてるところです。
        コードキャデミーのお陰で、下のWEBデザイナーになるために
        技術を身につけました。</p>;

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
            <div className='languges'>
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-square-js"></i>
                <i className="fa-brands fa-git"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-node"></i>
                <i className="fa-brands fa-react"></i>
            </div>
            <div>
              <img className='certificate' src={Certificate} alt='Codecademy Certificate'/>  
            </div>
        </div>
    </div>
    )
}