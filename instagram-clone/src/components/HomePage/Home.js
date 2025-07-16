import React from 'react';
import '../styles/Home.css';
import Navbar from '../navbar/Navbar';
import MainContent from '../MainContent/MainContent';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    
    
    render() {
        return (
            <div>
                <Navbar/>
                <MainContent/>
            </div>
        )
    }
}
export default Home;