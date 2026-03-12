/**
 * Landing Page — Checklist Consultório que Encanta
 * Ordem das seções conforme 03_CONTENT.md
 */
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

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <ParaQuem />
        <HowItWorks />
        <Team />
        <Testimonials />
        <Stats />
        <FAQ />
        <CTAForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
