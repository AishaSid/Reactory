import React from 'react';
import '../styles/MainContent.css';
import StatusBar from '../StatusBar/StatusBar';
import MainPage from '../MainPage/MainPage';
import { Grid } from '@mui/material';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Grid contatiner>
                    <Grid item={2}> </Grid>
                    <Grid item={6}>
                        <div>
                            <StatusBar/>
                            <MainPage/>
                        </div>
                    </Grid>

                    <Grid >
                        <Grid item={2}> </Grid>
                        <Grid item={2}> </Grid>
                    </Grid>


                </Grid>
            </div>
        )
    }
}

export default MainContent;