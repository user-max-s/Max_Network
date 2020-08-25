import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import './App.scss';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <div className="container">
        <Header />
        <div className="flex-container">
          <Navbar />
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App;
