import React, { useEffect } from 'react';
import Contact from './components/Contact';
import './scss/_reset.scss';



function App(props) {

  useEffect(() => {
    document.title = 'Agile Tamam'
  }, [])

  return (
    <>
      <main>
        <Contact/>

      </main>
    </>
  );
}

export default App;