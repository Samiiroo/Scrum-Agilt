import React, { useEffect } from 'react';
import './scss/_reset.scss';
import Header from './components/Header'
import LandingPage from './components/LandingPage';
function App(props) {

  useEffect(() => {
    document.title = 'Agile Tamam'
    localStorage.setItem('language', 'sv');
  }, [])

  return (
    <>
      <Header />
      <main>
        <LandingPage />
      </main>
    </>
  );
}

export default App;