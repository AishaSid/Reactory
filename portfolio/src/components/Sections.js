import React from 'react';
import './styles/Sections.css';
// import a2 from '../assets/a2.png';
const Sections = () => {

    return (
        <div classname ="sections"> 

        <div className='sections__container'>
            <div className='sections__img'>
                {/* <img sec= {a2} alt="" />  */}
            </div>
            <div className='sections__content'>
                <h1>Aisha Siddiqa</h1>
                <p>Experience in Frontend</p>
                <p> Experience in Next.js</p>
                <p>Java Development</p>
                <p>Artificial Intelligence</p>
        <button>Learn More</button>

        </div>
        </div>
        </div>
    )
}

export default Sections;