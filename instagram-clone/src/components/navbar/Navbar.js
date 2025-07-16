import React from 'react';
import '../styles/Navbar.css';
import {Grid} from '@mui/material';
import insta_logo from '../../images/logoinsta.png';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
           <div>
            <div className='navbar__barContent'>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                </Grid>
            </div>
           </div>
        )
    }
}

export default Navbar;