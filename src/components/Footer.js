import React from 'react';
import '../scss/components/_footer.scss';

import { Anchor } from 'antd';

const { Link } = Anchor;

function Footer() {
  
  return (
    <footer>
     {/* <Anchor>
        <Link href="#landingpage" >
      <div className="arrow-up">
      
        <i className="fas fa-angle-double-up fa-2x"></i>
    
      </div>
        </Link>
      </Anchor> */}
      <div className="arrow-up">
        <i className="fas fa-angle-double-up fa-2x"></i>
       

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