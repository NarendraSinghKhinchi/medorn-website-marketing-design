
import React from 'react';

const TrustBar: React.FC = () => {
  const partners = [
    "Sripad Heart Centre", 
    "NeoWinn Biotech", 
    "Trigin Life Sciences", 
    "Sangkol Pharma", 
    "Symbros", 
    "Banaraswale Healthcare", 
    "AC Pharma"
  ];

  // Duplicate the list to create a seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="bg-white border-y border-gray-100 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Trusted by the top, <span className="text-medical-blue">Pharmaceutical Companies</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Medorn ERP is one-stop solution for the pharmaceuticals which helps the company increase it's productivity.</p>
        </div>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-infinite-scroll whitespace-nowrap">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center mx-12 text-2xl font-bold text-gray-400 hover:text-medical-blue transition-colors cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth fading at edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
};

export default TrustBar;
