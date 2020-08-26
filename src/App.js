import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import './App.scss';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <div className="container">
        <Header />
        <div className="flex-container">
          <Navbar />
          <Profile />
        </div>
      </div>
    </div>
  )
}

export default App;
