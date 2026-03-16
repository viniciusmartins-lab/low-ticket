/**
 * Landing Page — Checklist Consultório que Encanta
 * Ordem das seções conforme 03_CONTENT.md
 */
import { useState } from 'react';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { ParaQuem } from './components/sections/ParaQuem';
import { HowItWorks } from './components/sections/HowItWorks';
import { Team } from './components/sections/Team';
import { Testimonials } from './components/sections/Testimonials';
import { Stats } from './components/sections/Stats';
import { FAQ } from './components/sections/FAQ';
import { CTAForm } from './components/sections/CTAForm';
import { Footer } from './components/sections/Footer';
import { LeadFormModal } from './components/ui/LeadFormModal';

function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <>
      <Header onOpenLeadForm={() => setIsLeadModalOpen(true)} />
      <main>
        <Hero onOpenLeadForm={() => setIsLeadModalOpen(true)} />
        <Problem />
        <Solution />
        <ParaQuem />
        <HowItWorks />
        <Team />
        <Testimonials />
        <Stats />
        <FAQ />
        <CTAForm onOpenLeadForm={() => setIsLeadModalOpen(true)} />
      </main>
      <Footer />

      <LeadFormModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />
    </>
  );
}

export default App;
