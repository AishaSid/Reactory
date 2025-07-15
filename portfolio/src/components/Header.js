import React from 'react';
import './styles/Header.css';
import { Close, MenuBookOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {

    const [active, setActive] = React.useState(false);

    const showMenu = () => {
        setActive(!active);
    }

    return (
        <div className='header'>
            <div className='header__logo'>
                <h1>Aisha</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <div className= "closed">
                        <Close className= "close" onClick={showMenu} />
                    </div>

                    <li><Link to="/"><b>Home</b></Link></li>
                    <li><Link to="/"><b>About</b></Link></li>
                    <li><Link to="/"><b>Portfolio</b></Link></li>
                    <li><Link to="/"><b>Blogs</b></Link></li>
                    <li><Link to="/"><b>Contact</b></Link></li>
                </ul>
            </nav>
            <div className="changer">
                <MenuBookOutlined className='menu' />
            </div>
        </div>
    );
};

export default Header;
