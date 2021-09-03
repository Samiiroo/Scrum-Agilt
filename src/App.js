import React, { useEffect } from 'react';
import { useState } from "react";
import './scss/_reset.scss';
import FAQ from './components/Faq';

function App(props) {

  useEffect(() => {
    document.title = 'Agile Tamam'
  }, [])

  return (
    <>
      <main>
        <FAQ />
      </main>
    </>
  );
}

export default App;