import React from 'react';
import '../scss/components/_cta.scss';
function CTA(props) {
  return (
    <div className="cta">
      <h1 className="title">Vi designar din Hemsida från
        <span>400 kr/tim</span>
      </h1>
      <a href="#contact" type="button" className="btn btn-cta center">Kontakta oss</a>
    </div>
  );
}

export default CTA;