import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import dummy1920_565 from '/1920-565.jpg'
import dummy500_300 from '/500-300.jpg'

const Home = () => {
  const { t } = useTranslation();

  const gridItems = [
    {
      id: 1,
      image: dummy500_300,
      header: t('dummy'),
      description: t('dummy'),
    },
    {
      id: 2,
      image: dummy500_300,
      header: t('dummy'),
      description: t('dummy'),
    },
    {
      id: 3,
      image: dummy500_300,
      header: t('dummy'),
      description: t('dummy'),
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${dummy1920_565})`
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900" style={{opacity: 0.5}}></div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center">
            <p className='text-xl text-white'>{t('dummy')}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t('dummy')}
            </h1>
            <p className="text-xl text-white">
              {t('dummy')}
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="general-container max-w-7xl mx-auto px-4 py-12" style={{backgroundColor: '#f0f0f0'}}>
        <h1 className='text-4xl font-bold'>{t('Vision')}</h1>
        <p className='text-xl'>{t('dummy')}</p>
        <h1 className='text-4xl font-bold mt-12'>{t('Products')}</h1>
        <div className="grid-container">
          {gridItems.map((item) => (
            <Link to={item.path} key={item.id} className="grid-item group">
              <img src={item.image} alt={item.header} className="transition-transform duration-300 group-hover:scale-105" />
              <div className="grid-item-content">
                <h3 className="text-xl font-semibold mb-2">{item.header}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
