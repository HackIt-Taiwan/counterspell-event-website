/**
 * HomePage Component
 *
 * This is the main landing page for the Counterspell Taiwan event.
 * It incorporates various sections such as the hero banner, event introduction, organizer information,
 * animated UFO transitions, event timings, team qualifications, horizontal scroll features,
 * mission statements, and contact information.
 * All content is wrapped within the SmoothScroll component to ensure a seamless scrolling experience.
 */

import React from 'react';
import Hero from "../components/Hero";
import EventIntroTransition from "../components/EventIntroTransition";
import CounterspellIntroductionSection from "../components/CounterspellIntroductionSection";
import OrganizerIntroductionSection from "../components/OrganizerIntroductionSection";
import TransitionUFOAnimation from "../components/TransitionUFOAnimation";
import EventTime from "../components/EventTime";
import TeamQualification from "../components/TeamQualification";
import HorizontalScroll from "../components/HorizontalScroll";
import SmoothScroll from "../components/SmoothScroll";
import Mission from "../components/Mission";
import ContactInfo from "../components/ContactInfo";

const HomePage: React.FC = () => {
  return (
    <SmoothScroll>
      <Hero />
      <EventIntroTransition />
      <CounterspellIntroductionSection />
      <OrganizerIntroductionSection />
      <TransitionUFOAnimation />
      <EventTime />
      <TeamQualification />
      <Mission />
      <HorizontalScroll />
      <ContactInfo />
    </SmoothScroll>
  );
};

export default HomePage;
