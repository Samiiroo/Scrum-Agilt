import React, { useEffect } from 'react';
import './scss/_reset.scss';
import Articles from './components/Articles';
function App(props) {
  useEffect(() => {
    document.title = 'Agile Tamam'
  }, [])

  return (
    <>
      <main>
        <Articles />
      </main>
    </>
  );
}

export default App;