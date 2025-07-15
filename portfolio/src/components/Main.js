import React from 'react';
import './styles/Main.css';
import { Twitter, LinkedIn, GitHub } from  '@mui/icons-material';
//import anu from '../assets/anu.png';

const Main = () => {

    return(
    <div classname = 'main'>'
    <div className='main__container'>
        <div className='main__container__text'>
<p>Hello Everyone</p>
<p>Hello Everyone</p>
<p>Hello Everyone</p>
<h1>I am Aisha </h1>
<p>Full Stack Developer and Ai Intergration</p>
<div>
    <Twitter className="icon" />
    <LinkedIn className="icon" />
    <GitHub className="icon" />
</div>

<div className= "buttons">
<button>Contact</button>
<button >Hire Me</button>
</div>

<div className='main_img'>
    {/* <img src={anu} alt="Aisha" /> */}

</div>

    </div>
    </div>
    </div>
    )  
}

export default Main;