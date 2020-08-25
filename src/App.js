import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.scss';

const App = () => {
  return (
    <div className="wrapper">
        <Header />
        <div className="container">
          <Navbar />
          <Main />
        </div>
    </div>
  )
}

export default App;
