import React from 'react';
import '../scss/components/_footer.scss';

function Footer() {
  return (
    <footer>
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