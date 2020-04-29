import React from 'react';
import logo from '../logo.svg'; // importing logo from src folder
import Title from '../components/Title'
const header = () => {
  return (
    <header className="App-header">
    <Title></Title>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React, Ironhacker!</h1>
      <h3>You are ready to take this to the next level!</h3>
    </header>
  );
}

export default header;