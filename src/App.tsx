import React from 'react';
import logo from './logo.svg';
import './App.css';
// console.log(process.env.REACT_APP_API_KEY, '<-- API KEY');

function App() {

  fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=1995-06-16`)
    .then(response => response.json())
    .then(data => console.log(data, '<-- HERE'))
    .catch(err => console.log(err))


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


