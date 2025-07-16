import React from 'react';
import './StatusBar.css';
import { Avatar } from '@mui/material';
import statusimg from '../../images/pp2.png';

class StatusBar extends React.Component {
    render() {
        return (
            <div>
             <div className="statusbar__container">
                <div className="status">
                    <Avatar className="statusbar__status" src={ statusimg} />
                    <div className="statusbar__statusText"> Aisha</div>
                </div>

                <div className="status">
                    <Avatar className="statusbar__status" src={ statusimg} />
                    <div className="statusbar__statusText"> Aisha</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar__status" src={ statusimg} />
                    <div className="statusbar__statusText"> Aisha</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar__status" src={ statusimg} />
                    <div className="statusbar__statusText"> Aisha</div>
                </div>

             </div>
            </div>
        )
    }
}

export default StatusBar;
