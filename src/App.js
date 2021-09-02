import React, { useEffect } from 'react';
import './scss/_reset.scss';
import Header from './components/Header'
function App(props) {

  useEffect(() => {
    document.title = 'Agile Tamam'
    localStorage.setItem('language', 'sv');
  }, [])

  return (
    <>
      <Header />
      <main>
      </main>
    </>
  );
}

export default App;