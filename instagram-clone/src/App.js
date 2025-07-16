import React from 'react';
import './App.css';
import LoginPage from './components/loginPage/LoginPage';
import Home from './components/HomePage/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
        <Home />
      </header>
    </div>
  );
}

export default App;
