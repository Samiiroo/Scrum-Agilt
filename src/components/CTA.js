import React from 'react';
import '../scss/components/_cta.scss';
import {Anchor} from 'antd';
const {Link} = Anchor; 

function CTA(props) {
  return (
    <div className="cta">
      <h2 className="title center">Vi designar din Hemsida från
        <span>400 kr/tim</span>
      </h2>
      {/* <a href="#contact" type="button" className="btn btn-cta center">Kontakta oss</a> */}
      <Anchor className="btn btn-cta center" targetOffset='80'><Link href="#about" title="Kontakta oss" /></Anchor>
    
      
    </div>
  );
}

export default CTA;