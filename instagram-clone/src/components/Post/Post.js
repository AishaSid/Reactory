import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import avatar from '../../images/pp2.png';
import psotimage from '../../images/post.jpg';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className = 'wrapper'>
            <div className='post__container'>
                <div className='post__container'>
                    <Avatar className='post__image' src={avatar} />
                    <div className='post__username'>Username</div>
                </div>

                <div>
                    <img src={psotimage} width="610px" />
                </div>
                <div> </div>
                <div> </div>
                </div>
            </div>
        )
    }
}

export default Post;