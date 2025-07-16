import React from 'react';
import '../styles/Navbar.css';
import { Grid } from '@mui/material';
import insta_logo from '../../images/logoinsta.png';
import home from '../../images/home.svg';
import message from '../../images/message.svg'; 
import find from '../../images/find.svg';
import react from '../../images/love.svg'; 
import { Avatar } from '@mui/material';
import dp from '../../images/pp1.png';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='navbar__barContent'>
                    <Grid container spacing={26}>
                        <Grid item spacing={2} > </Grid>
                        <Grid item xs={6} >
                            <img classname="navbar_logo" src={insta_logo} alt="logo" width="105px" />
                        </Grid>

                        <Grid item spacing={4}  className='navbar_searchBar'>
                            <input text="text" placeholder="Search" />
                        </Grid>

                        <Grid item xs={3} spacing={3}  style={{ display: 'flex' }}>
                            <img src={home} className= "navbar_img" alt="logo" width="25px" />
                            <img src={message} className= "navbar_img" alt="logo" width="25px" />
                            <img src={find} className= "navbar_img" alt="logo" width="25px" />
                            <img src={react} className= "navbar_img" alt="logo" width="25px" />
                           <Avatar src={dp} className='navbar_img' style={{ maxHeight: "30px", maxWidth: "30px" }} />
                        </Grid>

                    </Grid>
                </div>
            </div>
        )
    }
}

export default Navbar;