import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import './App.scss';

const App = (props) => {
  return (
    <div className="app-wrapper">
        <Header />
        <div className="app-container">
          <Navbar />
          <Main />
        </div>
    </div>
  )
}

export default App;
