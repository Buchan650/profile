import React from 'react';
import Breon from './Breon.jpg';
import Japan from '../Japan-flag.png';
import America from '../American-flag.png';
import { useState } from 'react';



function AboutMe() {
    const english = 'About Me';
    const japanese = '自己紹介';
    const japaneseInfo = <p>皆さん、こんにちは。私の名前はブリオン・ダンテ・カリー、39歳で、
        日本の岐阜に住むウェブデザイナー志望者です。 私は弘前大学の交換留学生として1年、英語教師
        として15年の合わせて16年近く日本に住んでいます。私は昔からコンピュータが大好きで、2023年
        3月の時点で、転職を決意し、フロントエンドエンジニアになるために必要なスキルを学び始めました。
        私の趣味はブラジリアン柔術、ウェイトトレーニング、ランニング、読書、そしてもちろんコーディングです。</p>;
    const englishInfo = <p>Hello, everyone! My name is Breon Dante Curry, I am 39 years old 
        and I am an aspiring  web designer living in Gifu, Japan. I have 
        lived in Japan for almost 16 years, one year as an exchange student 
        at Hirosaki University and 15 as an English teacher. I’ve always 
        had a love for computers and as of March 2023, I decided to make a 
        career change and began learning  the necessary skills to become a 
        front-end engineer. My hobbies include Brazilian Jiu Jitsu, weight 
        training, running, reading and of course coding.</p>;
    const [title, setTitle] = useState(english);
    const [introduction, setIntroduction] = useState(englishInfo);

    function handleJapaneseClick() {
              setTitle(japanese);
              setIntroduction(japaneseInfo);
          }
          
          function handleEnglishClick() {
              setTitle(english);
              setIntroduction(englishInfo);
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