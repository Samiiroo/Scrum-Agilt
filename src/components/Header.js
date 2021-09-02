import React from "react";
import "../scss/components/_header.scss"
function Header(props) {
  return (
    <header>
      <a href="#">
        <img src="/assets/logo.png " alt="logo" className="logo" />
      </a>
      <nav class="nav-bar">
        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="#about">Om oss</a>
          </li>
          <li className="nav-list-item">
            <a href="#faq">Vanliga frågor</a>
          </li>
          <li className="nav-list-item">
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
      <div className="flags">
        <button>
          <img className="swedish-symbol" src="/assets/swe.png" alt="svenska" onClick=" " />
        </button>
        <button>
          <img className="english-symbol" src="/assets/uk.png" alt="english" onClick=" " />
        </button>
      </div>

    </header>
  );
}

export default Header;
