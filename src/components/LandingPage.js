import React from 'react';
import CTA from './CTA';
function LandingPage(props) {
  return (
    <section className="landing-page" style={{ background: `url('/assets/img/landing-page-bg.png) no-repeat center/cover` }}>
      <p>
        Alltid undrat hur man kan behålla sin lugna tillstånd medan man bygger en perfekt sida som är
        både smidig och fin?
      </p>
      <p>
        Vi på Agile Taman lovar att vi är de mest flexibla arbetarna ni kommer hitta inom Skåne.
      </p>
      <CTA />
    </section >
  );
}

export default LandingPage;