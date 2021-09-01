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
    <section class="about" id="about">
      <div className="container">
        <h2 class="catch-frase-title center">*Catch frase*</h2>
        {isMounted && <Loader />}
        <div class="staff-container">
          {personal !== null && mapOutStaff()}
        </div>
        <p className="selling-words center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio lorem, suscipit sed pharetra id, ultrices posuere magna. Nulla justo magna, consequat in fermentum eu, consectetur vitae lacus. Fusce cursus lobortis sollicitudin. Nulla varius erat quis risus volutpat tincidunt. Sed aliquam scelerisque diam, et aliquet elit consequat non. In imperdiet feugiat orci pulvinar blandit. Curabitur sit amet ex accumsan mi eleifend rhoncus. Vivamus feugiat ligula odio. Aliquam placerat, urna nec tincidunt porta, dui urna tempor diam, non feugiat massa felis nec velit. Maecenas finibus ultrices metus, eget suscipit mauris auctor sed.
        </p>
      </div>
    </section>
  );
}

export default About;