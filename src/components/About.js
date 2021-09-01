import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Loader from './Loader';
import '../scss/components/_about.scss';
function About(props) {

  const [personal, updatePersonal] = useState(null);
  const [isMounted, updateIsMounted] = useState(true);

  const FetchPersonalData = async () => {
    return await Axios.get('json/staff.json');
  }


  // Funktion som hämtar data från useState personal och sedan mappar vi ut vår struktur.
  const mapOutStaff = () => {
    return personal.map((staff, key) =>
      <div className="personal-card" key={key}>
        <div class={`content`}>
          <img src={`/assets/img/${staff.img}`} alt="avartar of staff" />
          <h3>{staff.name}</h3>
          <h4>{staff.occupation}</h4>
        </div>
      </div>
    )
  }

  useEffect(() => {
    // Koll så data inte kommer försnabbt in 
    if (!isMounted) {
      return
    }
    // Här hämtar vi data och sparar ner det/uppdaterar till vår useState 
    FetchPersonalData().then(res => {
      console.log(res)
      updatePersonal(res.data.staff);

      // Stäng av vår loader.
      updateIsMounted(false);
    }).catch(err => console.log(err))
  }, [])

  return (
    <section class="about" id="about" style={{ background: "url('/assets/img/about-bg.png') no-repeat center/cover" }}>
      <div className="container">
        <h2 className="title center">Om oss</h2>
        <h3 class="catchphrase center">Katter har inget mot oss i smidighet</h3>
        <p className="selling-words center">
          Vi bygger en snygg, Modern och mobilvänlig hemsida som kan lyfta företaget mot nya möjligheter.
        </p>
        {isMounted && <Loader />}
        <div class="staff-container">
          {personal !== null && mapOutStaff()}
        </div>
      </div>
    </section>
  );
}

export default About;