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
import Carousel from "../components/Carousel.tsx";
import EventInformationTransition from "../components/EventInformationTransition.tsx";
import EventInformation from "../components/EventInformation.tsx";
import { Helmet } from 'react-helmet-async';

const bonusCards = [
  { id: 1, amount: "10000", awardName: "金牌", peopleCount: 1 },
  { id: 2, amount: "6000", awardName: "銀牌", peopleCount: 2 },
  { id: 3, amount: "3000", awardName: "銅牌", peopleCount: 3 },
  { id: 4, amount: "2000", awardName: "GenAI特別獎", peopleCount: 3 },
  { id: 5, amount: "2000", awardName: "佳作", peopleCount: 6 },
];

const HomePage: React.FC = () => {
  return (
    <SmoothScroll>
      <Helmet>
        <title>Counterspell Taiwan - 台灣首屆青少年遊戲黑客松</title>
        <meta name="description" content="參加Counterspell Taiwan，台灣首屆由青少年為青少年舉辦的遊戲開發黑客松。30小時內，展示您的創意與技術，贏取豐厚獎金！" />
        <meta name="keywords" content="Counterspell, 台灣, 黑客松, 遊戲開發, 青少年, Hackathon" />
        <meta property="og:title" content="Counterspell Taiwan - 台灣首屆青少年遊戲黑客松" />
        <meta property="og:description" content="參加Counterspell Taiwan，台灣首屆由青少年為青少年舉辦的遊戲開發黑客松。30小時內，展示您的創意與技術，贏取豐厚獎金！" />
        <meta property="og:image" content="/src/assets/logo.png" />
        <meta property="og:url" content="https://www.counterspell.tw" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.counterspell.tw" />
      </Helmet>
      <Hero />
      <EventIntroTransition />
      <CounterspellIntroductionSection />
      <OrganizerIntroductionSection />
      <Carousel cards={bonusCards} />
      <EventInformationTransition />
      <EventInformation />
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
