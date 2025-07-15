import React from 'react';
import './styles/Contact.css';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

const Contact = () => {

    return (
        <div className='contact'>
            <Link to= "/ ">
            <ArrowBack className='arrow' />
            </Link>

            <div className='inputs'>
                <h1>Contact Me</h1>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Message' className='msg'/>
                <button className='send'>Send</button>
                </div>

        </div>
    )
}

export default Contact;