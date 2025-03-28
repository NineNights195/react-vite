import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import dummy1920_565 from '/1920-565.jpg';
import dummy500_300 from '/500-300.jpg';

const AboutUs = () => {
  const { t } = useTranslation();

  const teamMembers = [
    { title: t('dummy'), image: dummy500_300, },
    { title: t('dummy'), image: dummy500_300, },
    { title: t('dummy'), image: dummy500_300, },
    { title: t('dummy'), image: dummy500_300, },
    { title: t('dummy'), image: dummy500_300, }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('About Us')}</h1>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('Vision')}</h2>
            <p className="text-gray-600 text-lg">
              {t('dummy')}
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('Mission')}</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                {t('dummy')}
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                {t('dummy')}
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                {t('dummy')}
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                {t('dummy')}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">{t('dummy')}</h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed pl-8 first-letter:text-2xl">{t('dummy')}</p>
              <p className="text-lg leading-relaxed pl-8 first-letter:text-2xl">{t('dummy')}</p>
            </div>
          </div>
        </div>
        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">{t('Our Team')}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, index) => (
              <Link 
                to={member.path}
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48 w-72">
                  <img 
                    src={member.image} 
                    alt={member.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                    {member.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
