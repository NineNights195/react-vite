import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h3>
          <div className="space-y-2 text-gray-300">
            <p>
              <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">
                {t('dummy')}
              </a>
            </p>
            <p>
              <a href="" className="hover:text-white transition duration-200">
                {t('dummy')}
              </a>
            </p>
            <p>
              <a href="" className="hover:text-white transition duration-200">
                {t('dummy')}
              </a>
            </p>
            <p>
              <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">
                {t('dummy')}
              </a>
            </p>
            <p>
              <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">
                {t('dummy')}
              </a>
            </p>
            <p>
              <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">
                {t('dummy')}
              </a>
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks.title')}</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="" className="hover:text-white transition duration-200">
                {t('dummy')}
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-white transition duration-200">
                {t('dummy')}
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-white transition duration-200">
                {t('dummy')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.products.title')}</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="" className="hover:text-white transition duration-200">
                {t('dummy')}
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-white transition duration-200">
                {t('dummy')}
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-white transition duration-200">
                {t('dummy')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 