import React, { useEffect } from 'react';
import './scss/_reset.scss';
import CTA from './components/CTA';
import './scss/components/_startpage.scss';
function App(props) {

  useEffect(() => {
    document.title = 'Agile Tamam'
  }, [])

  return (
    <>
      <main>
        <CTA />
      </main>
    </>
  );
}

export default App;