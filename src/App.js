/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
*/

// App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ImageComponent from './ImageComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* Your main content goes here */}
        {/* Other content */}
        <ImageComponent />
        {/* Other content */}
      </div>
    </div>
  );
}

export default App;



