import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div>
      <Nav></Nav>

      <main>
        <About></About>
        <Contact></Contact>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;
