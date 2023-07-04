import React from 'react';
import Breon from './Breon.jpg';
import Japan from '../Japan-flag.png';
import America from '../American-flag.png';
import { useState } from 'react';


function AboutMe() {
    const english = 'About Me';
    const japanese = '自己紹介';
    const japaneseIntro = <p>皆さん、こんにちは。私の名前はカリーブリオンです。
        生まれも育ちもカリフォルニアのデイリーシティー ですが、現在は家族５人（僕、妻、子供３人）
        で岐阜県各務原市に住んでいます。 私が日本に来日してから１５年弱経ちました。
        最初に日本に来たのは大学時代で、一年間交換留学生として弘前大学で勉強し、 
        日本の事がとても気に入りました。アメリカの大学卒業後、英語の講師として再来日し、
        １２年間英語の講師をしていましたが、現在はWEBデザイナーに転職しようと勉強中です。 
        僕が作ったこのサイトを見て下さり、ありがとうございます。このサイトは未完成で、
        今後新しい技術を身につける度に更新していくつもりです。</p>;
    const englishIntro = <p>'Hello, everyone! My name is Breon Dante Curry, I am 39 years old 
        and I am an aspiring  web designer living in Gifu, Japan. I have 
        lived in Japan for almost 16 years, one year as an exchange student 
        at Hirosaki University and 15 as an English teacher. I’ve always 
        had a love for computers and as of March 2023, I decided to make a 
        career change and began learning  the necessary skills to become a 
        front-end engineer. My hobbies include Brazilian Jiu Jitsu, weight 
        training, running, reading and of course coding.'</p>;
        const [title, setTitle] = useState(english);
        const [introduction, setIntroduction] = useState(englishIntro);
    
    
    function handleJapaneseClick() {
        setTitle(japanese);
        setIntroduction(japaneseIntro);
    }

    function handleEnglishClick() {
        setTitle(english);
        setIntroduction(englishIntro);
    }
    return (
        <div className='intro'>
                <div className='about-me'>
                    <div className='text-container'>
                        <h2 id='about-me-title'>{title}{title === english ? <img className='flag' src={Japan} alt='Japanese flag' onClick={handleJapaneseClick}/> : <img className='flag' src={America} alt='American flag' onClick={handleEnglishClick}/>}</h2>
                        {introduction}
                    </div>
                    <img className='profile-pic' src={ Breon } alt='Breon Curry'/>
                </div>
        </div>
    )
}

export default AboutMe;