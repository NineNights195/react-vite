import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <span className="text-xl font-semibold">Logo</span>
          </Link>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <Link to="/">{t('Home')}</Link>
            </li>
            <li>
              <Link to="/about-us">{t('About Us')}</Link>
            </li>
            <li>
              <Link to="/products">{t('Products')}</Link>
            </li>
            <li>
              <Link to="/our-team">{t('Our Team')}</Link>
            </li>
            <li>
              <Link to="/contact">{t('Contact')}</Link>
            </li>
          </ul>
          <div className="language-buttons">
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('th')}>TH</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
