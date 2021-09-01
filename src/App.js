import React, { useEffect } from 'react';
import { useState } from "react";
import './scss/_reset.scss';
import Faq from './components/Faq';
import Wrap from './components/Wrap';
import data from './components/data.json'

function App(props) {

  const [ faqs, setFaqs ] = useState(data)

  const toggleFaq = (index) => {
    setFaqs(faqs.map( (faq, i) => {
      if ( i === index ){
        faq.open = !faq.open
      }else{
        faq.open = false
      }

      return faq;
    }))
  }

  useEffect(() => {
    document.title = 'Agile Tamam'
  }, [])

  return (
    <>
      <main>
        <Wrap>
          <div>
            {faqs.map((faq, i) => (
              <Faq faq={faq} index={i} toggleFaq={toggleFaq} />
            ))}
          </div>
        </Wrap>
      </main>
    </>
  );
}

export default App;