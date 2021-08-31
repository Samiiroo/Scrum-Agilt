import React, { useEffect } from 'react';
import './scss/_reset.scss';
import About from './components/About';
function App(props) {

  useEffect(() => {
    document.title = 'Agile Tamam';
  }, [])

  return (
    <>
      <main>
        <About />
      </main>
    </>
  );
}

export default App;