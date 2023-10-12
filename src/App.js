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

import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ImageComponent from './ImageComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the change here
import About from './NavBarChilds/About';
import Champions from './NavBarChilds/Champions';
import News from './NavBarChilds/News';
import Esport from './NavBarChilds/Esport';
import Home from './NavBarChilds/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes> {/* Change from Switch to Routes */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/champions" element={<Champions />} />
            <Route path="/news" element={<News />} />
            <Route path="/esport" element={<Esport />} />
          </Routes>

          {/* Other content */}
        </div>
      </div>
    </Router>
  );
}

/*
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* Add your home page content here *//*}/*
    </div>
  );
}
*/

export default App;



