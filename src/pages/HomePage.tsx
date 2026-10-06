// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import AboutSection from './HomePage/sections/About';
import ServicesSection from './HomePage/sections/Services';
import ProjectsSection from './HomePage/sections/Projects';
import ContactSection from './HomePage/sections/Contact';


import FaqSection from './HomePage/sections/Faq';
import ClientsSection from './HomePage/sections/Clients';
import TrustCertificationsSection from './HomePage/sections/TrustCertifications';export default function HomePage(): React.JSX.Element {
  return (
<>
      <HeroSection />
      <ClientsSection />
      <TrustCertificationsSection />

      <AboutSection />

      <ServicesSection />

      <ProjectsSection />

      <FaqSection />
      <ContactSection />
    </>
  );
}
