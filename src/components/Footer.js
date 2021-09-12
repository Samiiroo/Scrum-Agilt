import React from 'react';
import '../scss/components/_footer.scss';

import { useTranslation } from "react-i18next";

function Footer() {

  const { t } = useTranslation();

  return (
    <footer>
      <ul className="footer-list">
        <li><a href="#about">{t('om oss')}</a></li>
        <li><a href="#faq">{t('vanliga frågor')}</a></li>
        <li><a href="#contact">{t('kontakt')}</a></li>
        <li><a href="#article">{t('Nyheter & Artiklar')}</a></li>
      </ul>
      <div className="copyright">Copyright: Inc.{ new Date().getFullYear().toString() } all reserved</div>
    </footer>
  )
}

export default Footer;