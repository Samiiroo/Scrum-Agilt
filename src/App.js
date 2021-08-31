import React, { useEffect } from 'react';
import './scss/_reset.scss';
function App(props) {

  useEffect(() => {
    document.title = 'Agile Tamam'
  }, [])

  return (
    <>
      <main>
      </main>
    </>
  );
}

export default App;