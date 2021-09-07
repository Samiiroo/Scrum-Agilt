import React from "react";
import "../scss/components/_footer.scss";

import { Anchor } from "antd";

const { Link } = Anchor;

function Footer() {
  return (
    <footer>
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
  );
}

export default Footer;
