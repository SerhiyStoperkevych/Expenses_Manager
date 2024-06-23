import React from 'react';
import MainList from './components/MainList';
import SecondList from './components/SecondList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <MainList />
      <SecondList />
    </div>
  );
};

export default App;
