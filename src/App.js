import React, { useEffect } from 'react';
import Footer from './components/Footer'
import './scss/_reset.scss';
function App(props) {

  useEffect(() => {
    document.title = 'Agile Tamam'
  }, [])

  return (
    <>
      <main>
      </main>
      <Footer />
    </>
  );
}

export default App;