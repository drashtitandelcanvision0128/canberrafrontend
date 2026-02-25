import React, { createRef } from 'react';
import { SectionId } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import DigitalEngineering from './components/DigitalEngineering';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const sectionRefs = {
    [SectionId.Home]: createRef<HTMLDivElement>(),
    [SectionId.Services]: createRef<HTMLDivElement>(),
    [SectionId.DigitalEngineering]: createRef<HTMLDivElement>(),
    [SectionId.About]: createRef<HTMLDivElement>(),
    [SectionId.Careers]: createRef<HTMLDivElement>(),
    [SectionId.Contact]: createRef<HTMLDivElement>(),
  };

  const handleScrollTo = (id: SectionId) => {
    sectionRefs[id].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header onScrollTo={handleScrollTo} />
      <main>
        <div id={SectionId.Home} ref={sectionRefs[SectionId.Home]}>
          <Hero onScrollTo={handleScrollTo} />
        </div>
        <div id={SectionId.Services} ref={sectionRefs[SectionId.Services]}>
          <Services onScrollTo={handleScrollTo} />
        </div>
        <div id={SectionId.DigitalEngineering} ref={sectionRefs[SectionId.DigitalEngineering]}>
          <DigitalEngineering />
        </div>
        <div id={SectionId.About} ref={sectionRefs[SectionId.About]}>
          <About />
        </div>
        <div id={SectionId.Careers} ref={sectionRefs[SectionId.Careers]}>
          <Careers />
        </div>
        <div id={SectionId.Contact} ref={sectionRefs[SectionId.Contact]}>
          <Contact />
        </div>
      </main>
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
};

export default App;