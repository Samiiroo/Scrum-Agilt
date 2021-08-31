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

  const mapOutStaff = () => {
    return personal.map((staff, key) => <div className="personal-card" key={key}>
      <div class="content">
        <img src={`/assets/img/${staff.img}`} alt="avartar of staff" />
        <h2>{staff.name}</h2>
        <h3>{staff.occupation}</h3>
      </div>
    </div>
    )
  }

  useEffect(() => {
    if (!isMounted) {
      return
    }
    FetchPersonalData().then(res => {
      updatePersonal(res.data.staff);
      updateIsMounted(false);
    })
  }, [])

  return (
    <section class="about" id="about">
      <div className="personal-container container">
        <h2 class="catch-frase-title">*Catch frase*</h2>
        {isMounted ? (<Loader />) : mapOutStaff()}
        <p className="selling-words">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio lorem, suscipit sed pharetra id, ultrices posuere magna. Nulla justo magna, consequat in fermentum eu, consectetur vitae lacus. Fusce cursus lobortis sollicitudin. Nulla varius erat quis risus volutpat tincidunt. Sed aliquam scelerisque diam, et aliquet elit consequat non. In imperdiet feugiat orci pulvinar blandit. Curabitur sit amet ex accumsan mi eleifend rhoncus. Vivamus feugiat ligula odio. Aliquam placerat, urna nec tincidunt porta, dui urna tempor diam, non feugiat massa felis nec velit. Maecenas finibus ultrices metus, eget suscipit mauris auctor sed.
        </p>
      </div>
    </section>
  );
}

export default About;