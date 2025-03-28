import React from 'react';
import { useTranslation } from 'react-i18next';
import dummy1920_565 from '/1920-565.jpg';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[300px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${dummy1920_565})`
        }}
      >
        <div className="absolute inset-0 bg-gray-900" style={{opacity: 0.6}}></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('dummy')}</h1>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Office */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('dummy')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">{t('dummy')}</h3>
                <p className="text-gray-600">{t('dummy')}</p>
                <div className="mt-4">
                  <p className="text-gray-700 font-medium">{t('dummy')}</p>
                  <p className="text-gray-600">dummy</p>
                  <p className="text-gray-600">dummy</p>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700 font-medium">{t('dummy')}</p>
                  <a href="" className="text-amber-600 hover:text-amber-700">
                    dummy
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Department */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('dummy')}</h2>
            <div className="space-y-4">
              <div className="mt-4">
                <p className="text-gray-700 font-medium">{t('dummy')}</p>
                <p className="text-gray-600">{t('dummy')}</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-700 font-medium">{t('dummy')}</p>
                <a href="" className="text-amber-600 hover:text-amber-700">
                  {t('dummy')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Working Hours & Social Media */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Working Hours */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('dummy')}</h2>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">{t('dummy')}: </span>
                {t('dummy')}
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('dummy')}</h2>
            <div className="space-y-4">
              <a href="" className="block text-amber-600 hover:text-amber-700">
                {t('dummy')}
              </a>
              <a href="#" className="block text-amber-600 hover:text-amber-700">
                {t('dummy')}
              </a>
              <p className="text-gray-600">
                <span className="text-amber-600">{t('dummy')}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('dummy')}</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.instagram.com/ninenights195/"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
