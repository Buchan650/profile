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
import HalfTone from './Half-tone-wolf.jpg';
import BShoes from './B-Shoes.jpg';
import Brush from './Brush.jpg';
import OilPainting from './Dog-oil-painting.jpg';
import Duatone1 from './Duotone1.jpg';
import Duatone2 from './Duotone2.jpg';
import Noah from './Noah.jpg';
import Glide from './Glide.jpg';
import SealCup from './Seal-in-a-cup.jpg';
import PaperEffect from './Paper-effect.jpg';
import Paraestra from './Paraestra-postcard.jpg';
import Nature from './Nature-leaves.jpg';
import Ship from './Ship-in-a-bottle.jpg';
import Ink from './Ink-splat-alley.jpg';
import Airforces from './Airforces.jpg';
import AsukaLogo from './Asuka-logo.jpg';
import Bear from './Bear.jpg';
import CTB from './CTB.png';
import Earbuds from './earbuds.jpg';
import Love from './Love.jpg';
import Sleeping from './Sleeping-fox.jpg';
import Map from './Map-assignment.jpg';
import Banner from './Banner.jpg';
import Expert from './expert.jpg';
import Level2 from './level 2.jpg';
import Level3 from './Level-3(2).jpg';
import MusicPlayer from './music-player.jpg';
import NewYear from './new-year-animation2.gif';
import Rainbow from './rainbow.jpg';
import Standard from './standard.jpg';
import Website1 from './web-site-1.jpg';
import Website2 from './web-site-2.jpg';
import Website3 from './website 3.jpg';
import ThreeD from './3D-shapes.png';
import AppleMusic from './Apple-Music.png';
import Apple from './Apple.png';
import Awake from './Awake-fox.jpg';
import CreditCard from './credit-card.png';
import Duck from './duck.png';
import Rings from './Rings.png';
import Tire from './tire.png';

import { useState } from 'react';

export default function Porfolio() {
    const japanese = 'ポートフォリオ';
    const japaneseProjects = <p>私は、ウェブデザイナーとしての現在の技術を実証するため、
        多くのプロジェクトを作成しました。見てください、そして、あなたが見たものに感心してくれる
        と幸いです。</p>;
        const english = 'Portfolio';
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
    <div>
        <div className='projects'>
            <h2>{title}{title === english ? <img className='flag' src={Japan} alt='Japanese flag' onClick={handleJapaneseClick}/> : <img className='flag' src={America} alt='American flag' onClick={handleEnglishClick}/>}</h2>
            {projects}
            <div className='proj-container'>
                <article className='proj'>
                        <p>GitHub Profile</p>
                        <Link to="https://github.com/Buchan650" target="_blank" alt='link to GitHub'><img src={Github} alt='gitHub site'/></Link>
                        
                </article>
                <article className='proj'>
                    <p>Portfolio Page</p>
                    <Link to="https://breoncurry-portfolio-site.netlify.app/" target="_blank" alt='link to portfolio page'><img src={Portfolio} alt='portfolio page'/></Link>
                    <Link to="https://github.com/Buchan650/profile" target="_blank" alt='link to portfolio page repository' ><button className='button'><span>Repository  </span></button></Link>
                </article>
                <article className='proj'>
                    <p>Personal Page</p>
                    <Link to="https://buchan650.github.io/" target="_blank" alt='link to personal page'><img src={Personal} alt='personal page'/></Link>
                    <Link to="https://github.com/Buchan650/buchan650.github.io" target="_blank" alt='link to personal page repository'><button className='button'><span>Repository  </span></button></Link>
                </article>
                <article className='proj'>
                    <p>Boxing Gym</p>
                    <Link to="https://buchan650.github.io/boxing_studio/" target="_blank" alt='link to boxing studio page'><img src={Boxing} alt='boxing studio page'/></Link>
                    <Link to="https://github.com/Buchan650/boxing_studio" target="_blank" alt='link to boxing studio page repository'><button className='button'><span>Repository  </span></button></Link>
                </article>
                <article className='proj'>
                    <p>Jiu Jitsu Club</p>
                    <Link to="https://buchan650.github.io/jiujitsu_club/" target="_blank" alt='link to jiu jitsu club page'><img src={JiuJitsu} alt='jiu jitsu club page'/></Link>
                    <Link to="https://github.com/Buchan650/jiujitsu_club" target="_blank" alt='link to jiu jitsu club page repository'><button className='button'><span>Repository  </span></button></Link>
                </article>
                <article className='proj'>
                    <p>Art Store(Repository only)</p>
                    <img src={ArtStore} alt='art store page'/>
                    <Link to="https://github.com/Buchan650/Dasmoto" target="_blank" alt='link to art store page repository'><button className='button'><span>Repository  </span></button></Link>
                </article>
            </div>
        </div>
        <div className='photoshop-images'>
            <div>
                <h2>Photoshop</h2>
            </div>
            <div className='photopshop-portfolio'>
                <img src={Nature} alt='Leaves'></img>
                <img src={Brush} alt='Womans soul leaving her body'></img>
                <img src={BShoes} alt='Shoes'></img>
                <img src={OilPainting} alt='Oil painting of a dog'></img>
                <img src={Duatone1} alt='Woman holding glasses'></img>
                <img src={Glide} alt='Man dunking'></img>
                <img src={PaperEffect} alt='CTB logo'></img>
                <img src={Ink} alt='Eurpean street'></img>
                <img src={SealCup} alt='Tea cup with a sel swimming in it'></img>
                <img src={Duatone2} alt='Man behind tree logo'></img>
                <img src={Paraestra} alt='Postcard form jiui jitsu academy'></img>
                <img src={HalfTone} alt='Half tone wolf'></img>
                <img src={Ship} alt='Ship in a bottle'></img>
                <img src={Noah} alt='Liquified logo'></img>
                <img src={Airforces} alt='Air Force 1s ad'></img>
                <img src={Expert} alt='Pizza shop site'></img>
                <img src={Level2} alt='Golf course'></img>
                <img src={Level3} alt='Dog frame'></img>
                <img src={Rainbow} alt='Forest rainbow scene'></img>
                <img src={Standard} alt='Eurpean street'></img>
                <img src={Website1} alt='Website template'></img>
                <img src={Website2} alt='Website template'></img>
                <img src={Website3} alt='Web template'></img>
                <img src={MusicPlayer} alt='Music player'></img>
                <img src={NewYear} alt='New Year banner'></img>
                <img src={Banner} alt='Basketball banner'></img>
            </div>
        </div>
        <div className='illustrator-images'>
            <div>
                <h2>Illustrator</h2>
            </div>
            <div className='illustrator-portfolio'>
                <img src={Love} alt='Heart logo'></img>
                <img src={Sleeping} alt='Animated fox'></img>
                <img src={Bear} alt='Animated bear'></img>
                <img src={Earbuds} alt='White headphones'></img>
                <img src={CTB} alt='CTB logo'></img>
                <img src={AsukaLogo} alt='Woman logo'></img>
                <img src={Map} alt='Map of imaginary city'></img>
                <img src={ThreeD} alt='3D model'></img>
                <img src={AppleMusic} alt='Itunes logo'></img>
                <img src={Apple} alt='Apple drawing'></img>
                <img src={Awake} alt='Fox drawing'></img>
                <img src={CreditCard} alt='3D credit card'></img>
                <img src={Duck} alt='Duck drawing'></img>
                <img src={Rings} alt='3D rings'></img>
                <img src={Tire} alt='Bike drawing'></img>
            </div>
        </div>
    </div>
    
        )
    }