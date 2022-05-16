import Card from 'components/cards/Card';
import GridCards from 'components/cards/GridCards';
import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <GridCards/>
      </header>
    </div>
  );
}

export default App;
