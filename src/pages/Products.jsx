import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import dummy1920_565 from '/1920-565.jpg';
import dummy500_300 from '/500-300.jpg';

const Products = () => {
  const { t } = useTranslation();

  const products = [
    {
      title: t('dummy'),
      description: t('dummy'),
      image: dummy500_300,
      features: [
      ]
    },
    {
      title: t('dummy'),
      description: t('dummy'),
      image: dummy500_300,
      features: [
      ]
    },
    {
      title: t('dummy'),
      description: t('dummy'),
      image: dummy500_300,
      features: [
      ]
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
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('Products')}</h1>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-16">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <Link to={product.path} className="block">
                  <div className="relative group overflow-hidden rounded-lg">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h2>
                  <p className="text-gray-600 text-lg mb-6">{product.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="text-amber-500 mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={product.path}
                    className="mt-8 inline-block bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors duration-200"
                  >
                    {t('Learn More')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
