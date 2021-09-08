import React,{useState}from 'react';
import '../scss/components/_footer.scss';

import { Anchor } from 'antd';

const { Link } = Anchor;

function Footer() {
  const [showScroll, setShowScroll] = useState(false);



  const checkScrollTop = () => {

    if (!showScroll && window.pageYOffset > 400) {

      setShowScroll(true);

    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {

    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", checkScrollTop);
  return (
    <footer>
      <div className="arrow-up">
        <i className="fas fa-angle-double-up fa-2x" onClick={scrollTop}></i>
      </div>
      <Anchor targetOffset="80">
        <ul className="footer-list">
          <li>
            <Link href="#about" title="Om oss" />
          </li>
          <li>
            <Link href="#faq" title="Vanliga frågor" />
          </li>

          <li>

            <Link href="#contact" title="Kontakt" />

          </li>

        </ul>

      </Anchor>

      <div className="copyright">Copyright: Inc.2021 all reserved</div>
     
    </footer>
  )
}

export default Footer;