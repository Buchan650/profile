import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Japan from '../Japan-flag.png';
import America from '../American-flag.png';

function Contact() {
    const english = 'Contact Information';
    const englishContact = <p id='contact-message'>If you have any questions, 
    comments(good or bad) about my content <br/>or just want to get in contact 
    with me, <br/> please feel free to contact me via email or through my GitHub.</p>
    const japanese = '連絡先';
    const japanseContact = <p id='contact-message'>質問やコメント、ただ連絡が取りたい場合、
    メール、電話、GitHub、どちらを使っても構いません。</p>;

    const [title, setTitle] = useState(english);
    const [contact, setContact] = useState(englishContact);

    function handleJapaneseClick() {
        setTitle(japanese);
        setContact(japanseContact);
    }
    function handleEnglishClick() {
        setTitle(english);
        setContact(englishContact);
    }

    return (
        <div className='contact'>
            <h2 id='contact-title'>{title}{title === english ? <img className='flag' src={Japan} alt='Japanese flag' onClick={handleJapaneseClick}/> : <img className='flag' src={America} alt='American flag' onClick={handleEnglishClick}/>}</h2>
            {contact}
            <p><i className="fa-sharp fa-solid fa-envelope"></i>Email:<Link className='contact-links' to="mailto: Breon.curry650@gmail.com">Breon.curry650@gmail.com</Link><br/><i className="fa-brands fa-github"></i>GitHub:<Link className='contact-links' to="https://github.com/Buchan650" target="_blank">https://github.com/Buchan650</Link><br/><i className="fa-solid fa-phone"></i>
            Phone Number:<Link to='tel: 090-5000-7190' className='contact-links'>090-5000-7190</Link><br/></p>
        </div>
    )
}

export default Contact;