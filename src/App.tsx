import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { HeroSection } from './components/HeroSection';
import { TechMarqueeSection } from './components/TechMarqueeSection';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CustomCodeSection } from './components/CustomCodeSection';
import { WordPressSection } from './components/WordPressSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyAndFaqSection } from './components/WhyAndFaqSection';
import { ContactFooterSection } from './components/ContactFooterSection';

export default function App() {
  const [prefilledSubject, setPrefilledSubject] = useState('');

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#090E1A] text-[#F8FAFC]">
        <CustomCursor />
        <Navbar />
        <main>
          {/* Section 01 — Hero / Homepage */}
          <HeroSection />
          {/* Section 02 — Animated Tech Marquee */}
          <TechMarqueeSection />
          {/* Section 03 — About Me */}
          <AboutSection />
          {/* Section 04 — Experience & Achievements */}
          <StatsSection />
          {/* Section 05 — Technical Skills */}
          <SkillsSection />
          {/* Section 06 — Services I Offer */}
          <ServicesSection onSelectServiceForContact={(title) => setPrefilledSubject(`Service Inquiry: ${title}`)} />
          {/* Section 07 — Featured Projects */}
          <ProjectsSection onInquireProject={(subject) => setPrefilledSubject(subject)} />
          {/* Section 08 — Custom Coding / From Scratch */}
          <CustomCodeSection />
          {/* Section 09 — WordPress & Elementor Expertise */}
          <WordPressSection />
          {/* Section 10 — My Work Process */}
          <ProcessSection />
          {/* Section 11 — Why Work With Me / FAQ */}
          <WhyAndFaqSection />
        </main>
        {/* Section 12 — Contact Me / Footer */}
        <ContactFooterSection prefilledSubject={prefilledSubject} />
      </div>
    </MotionConfig>
  );
}
