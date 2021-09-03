import React, { useEffect, useState, DataContext } from 'react';
import './scss/_reset.scss';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Articles from './components/Articles';
import Footer from './components/Footer';
import FAQ from './components/Faq';

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
        <FAQ />
        <Articles />
      </main>
      <Footer />
    </>
  );
}

export default App;