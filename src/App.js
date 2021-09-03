import React, { useEffect } from 'react';
import './scss/_reset.scss';
import Header from './components/Header'
import LandingPage from './components/LandingPage';
import About from './components/About';
import Articles from './components/Articles';
function App(props) {
  useEffect(() => {
    document.title = 'Agile Tamam';
  }, [])

  return (
    <>
      <Header />
      <main>
        <LandingPage />
        <About />
        <Articles />
      </main>
    </>
  );
}

export default App;