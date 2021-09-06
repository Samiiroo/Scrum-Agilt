import React from 'react';
import '../scss/components/_header.scss';

import { Anchor } from 'antd';

const { Link } = Anchor;

function Header(props) {

  return (
    <header>
      <a href="/">
        <img src="/assets/logo.png " alt="logo" className="logo" />
      </a>
      <nav className="nav-bar">
        <Anchor targetOffset='80'>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link href="#about" title="Om oss" />
            </li>
            <li className="nav-list-item">
              <Link href="#faq" title="Vanliga frågor" />
            </li>
            <li className="nav-list-item">
              <Link href="#contact" title="Kontakt" />
            </li>
          </ul>
        </Anchor>
      </nav>
      <div className="flags">
        <button>
          <img className="swedish-symbol" src="/assets/se.png" alt="svenska" onClick={() => localStorage.setItem('language', 'sv')} />
        </button>
        <button>
          <img className="english-symbol" src="/assets/uk.png" alt="english" onClick={() => localStorage.setItem('language', 'en')} />
        </button>
      </div>
    </header>
  );
}

export default Header;