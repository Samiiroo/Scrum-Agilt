import React, { useEffect } from 'react';
import './scss/_reset.scss';
import './scss/components/_landing-page.scss';
import LandingPage from './components/LandingPage';
function App(props) {

  useEffect(() => {
    document.title = 'Agile Tamam'
  }, [])

  return (
    <>
      <main>
        <LandingPage />
      </main>
    </>
  );
}

export default App;