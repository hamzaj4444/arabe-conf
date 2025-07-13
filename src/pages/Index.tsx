import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ObjectivesSection } from '@/components/ObjectivesSection';
import { ProgramSection } from '@/components/ProgramSection';
import { CommitteesSection } from '@/components/CommitteesSection';
import { RegistrationSection } from '@/components/RegistrationSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ObjectivesSection />
          <ProgramSection />
          <CommitteesSection />
          <RegistrationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
