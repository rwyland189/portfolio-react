import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  // const [portfolioSelected, setPortfolioSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        // portfolioSelected={portfolioSelected}
        // setPortfolioSelected={setPortfolioSelected}
      ></Nav>

      <main>
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ): (
          <Contact></Contact>
        )}

        {/* {!portfolioSelected ? (
          <>
            <About></About>
          </>
        ): (
          <Portfolio></Portfolio>
        )} */}

        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;
