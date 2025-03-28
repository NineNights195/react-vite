import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import dummy1920_565 from '/1920-565.jpg';
import dummy500_300 from '/500-300.jpg';

const OurTeam = () => {
  const { t } = useTranslation();

  const teamSections = [
    {
      title: t('dummy'),
      description: t('dummy'),
      image: dummy500_300,
    },
    {
      title: t('dummy'),
      description: t('dummy'),
      image: dummy500_300,
    },
    {
      title: t('dummy'),
      description: t('dummy'),
      image: dummy500_300,
    },
    {
      title: t('dummy'),
      description: t('dummy'),
      image: dummy500_300,
    },
    {
      title: t('dummy'),
      description: t('dummy'),
      image: dummy500_300,
    }
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
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('Our Team')}</h1>
        </div>
      </div>

      {/* Team Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamSections.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img 
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  {section.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{section.description}</p>
                <Link 
                  to={section.path}
                  className="inline-block bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors duration-200"
                >
                  {t('Learn More')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
