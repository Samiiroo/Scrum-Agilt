import React from 'react'
import '../scss/components/_cta.scss';


function CTA(){
    function hanldeClick(){

    }
    return (
        <section className="cta" >
            <h5 className="firstline">Alltid undrat hur man kan behålla sin lugna tillstånd medan man bygger en perfekt sida som är 
             både smidig och fin?
            </h5>

            <h5 className="secondline">Vi på Agile Taman lovar att vi är de mest flexibla arbetarna ni kommer hitta inom Skåne.</h5>

            <h1 className="title">Vi designar din Hemsida från <br></br> 
                         
                         <span className="span">400 kr/tim</span>
            </h1>
           
           
            <button type="button" className="btn btn-cta" onClick={hanldeClick}>Kontakta oss</button>
        </section>
    )
}

export default CTA
