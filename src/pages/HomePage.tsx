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
import SmoothScroll from "../components/SmoothScroll.tsx";
import Mission from "../components/Mission.tsx";
import ContactInfo from "../components/ContactInfo.tsx";

const HomePage: React.FC = () => {
    return (
        <>
            {/* 将所有内容放在一个 SmoothScroll 中 */}
            <SmoothScroll>
                <Hero />
                <EventIntroTransition />
                <CounterspellIntroductionSection />
                <OrganizerIntroductionSection />
                <TransitionUFOAnimation
                    scrollSpeed={1}  // 控制 UFO 移动的速度
                    sectionHeight={1800}  // Section 的高度
                />
                <EventTime />
                <TeamQualification />
                {/* 在 HorizontalScroll 上添加 excludeFromSmoothScroll 属性 */}
                <HorizontalScroll />
                <Mission />
                {/* 如果有其他组件，可以继续添加 */}
                <ContactInfo />
            </SmoothScroll>
        </>
    );
};

export default HomePage;
