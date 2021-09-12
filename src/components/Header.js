import React from 'react';
import '../scss/components/_header.scss';

import { useTranslation } from "react-i18next";

function Header(props) {

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <a href="/">
        <img src="/assets/logo.png " alt="logo" className="logo" />
      </a>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="#about">{t('om oss')}</a>
          </li>
          <li className="nav-list-item">
            <a href="#faq">{t('vanliga frågor')}</a>
          </li>
          <li className="nav-list-item">
            <a href="#contact">{t('kontakt')}</a>
          </li>
          <li>
            <a href="#article">{t('Nyheter & Artiklar')}</a>
          </li>
        </ul>
      </nav>
      <div className="flags">
        <button>
          <img className="swedish-symbol" src="/assets/se.png" alt="svenska" onClick={() => changeLanguage('sv')} />
        </button>
        <button>
          <img className="english-symbol" src="/assets/uk.png" alt="english" onClick={() => changeLanguage('en')} />
        </button>
      </div>
    </header>
  );
}

export default Header;