import React from 'react';

import { HeroService } from './components/hero-service';
import Services from './components/services';
import BusinessFlow from './components/business-flow';
import MapComponent from './components/map-component';

const ServicesPage = () => {
  return (
    <main className="bg-black">
      <HeroService />
      <Services />
      <BusinessFlow />
      <MapComponent />
    </main>
  );
};

export default ServicesPage;
