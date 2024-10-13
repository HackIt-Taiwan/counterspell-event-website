// src/pages/HomePage.tsx

import React from 'react';
import Hero from "../components/Hero.tsx";
import EventIntroTransition from "../components/EventIntroTransition.tsx";
import CounterspellIntroductionSection from "../components/CounterspellIntroductionSection.tsx";
import OrganizerIntroductionSection from "../components/OrganizerIntroductionSection.tsx";
import TransitionUFOAnimation from "../components/TransitionUFOAnimation.tsx";
import EventTime from "../components/EventTime.tsx";
import TeamQualification from "../components/TeamQualification.tsx";
import HorizontalScroll from "../components/HorizontalScroll.tsx";
import MissionSection from "../components/Mission.tsx";
import SmoothScroll from "../components/SmoothScroll.tsx";

/**
 * HomePage - This is the main homepage component that renders both the PlanetComponent
 * and UFOComponent. Both components share the same size proportions for consistency.
 *
 * @component
 * @example
 * return (
 *   <HomePage />
 * )
 */
const HomePage: React.FC = () => {
    return (
        <>
            <SmoothScroll>
                <Hero />
                <EventIntroTransition />
                <CounterspellIntroductionSection />
                <OrganizerIntroductionSection />
                <TransitionUFOAnimation
                    scrollSpeed={1}  // 控制 UFO 移動的速度
                    sectionHeight={1800}  // Section 的高度
                />
                <EventTime />
                <TeamQualification />
                <HorizontalScroll />
                <MissionSection />
            </SmoothScroll>
        </>
    );
};

export default HomePage;
