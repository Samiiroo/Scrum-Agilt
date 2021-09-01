import React from "react";
import "../scss/components/_header.scss"
function Header(props) {
  return (
    <header>
      <img src="/assets/logo.png " alt="logo" className="logo"/>
      <nav class="nav-bar">
        <ul className="nav-list">
          <li className="nav-list-item">
            Om oss
          </li>
          <li className="nav-list-item">
            Vanliga frågor
          </li>
          <li className="nav-list-item">
            Kontakt
          </li>
        </ul>
      </nav>
      <img className="english-symbol" src="/assets/uk.png" alt="english" onClick=" " />
      <img className="swedish-symbol" src="/assets/swe.png" alt="svenska" onClick=" " />
    </header>
  );
}

export default Header;
