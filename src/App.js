import React, { useEffect } from 'react';
import { useState } from "react";
import './scss/_reset.scss';
import Faq from './components/Faq';
import './scss/components/faq.css';

function App(props) {

  const [ faqs, setFaqs ] = useState([
    {
      question: 'How are you',
      answer: 'I am good',
      open: false
    },
    {
      question: 'Whast is your name',
      answer: 'my name is jeff',
      open: false
    },
    {
      question: 'How old are you',
      answer: 'I am 25y/o',
      open: false
    },
    {
      question: 'where are you from',
      answer: 'I am from korea',
      open: false
    },
    {
      question: 'what is up',
      answer: 'noiceee',
      open: false
    },
    {
      question: 'hmmmm',
      answer: 'hmmmmmmmmmmmmm',
      open: false
    },
  ])

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
        <div className="faqs">
          {faqs.map((faq, i) => (
            <Faq faq={faq} index={i} toggleFaq={toggleFaq} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;