import React from 'react';
import './styles/LoginPage.css'; 

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        username: '',
        password: ''
        };
    }
  render()
  {
    return(
        <div>
            <h1>Login Page</h1>
        </div>
    )
  }

}

export default LoginPage;