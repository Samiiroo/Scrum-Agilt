import React from 'react';
import '../scss/components/_footer.scss';

function Footer() {
  
  return (
    <footer>
      <div className="arrow-up">
        <i className="fas fa-angle-double-up fa-2x"></i>
            <a href="#landingpage"> </a>
      
      </div>
      <ul className="footer-list">
       
        <li>
          <a href="#about">Om oss</a>
        </li>
        <li>
          <a href="#faq">Vanliga frågor</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
      <div className="copyright">Copyright: Inc.2021 all reserved</div>
    </footer>
  )
}

export default Footer;