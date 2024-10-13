// HorizontalScroll.tsx
import React, { useEffect, useRef } from 'react';
import ufo from '../assets/ufo.svg';

const HorizontalScroll: React.FC = () => {
    // References to DOM elements
    const scrollboxContainerRef = useRef<HTMLDivElement>(null);
    const scrollboxRef = useRef<HTMLDivElement>(null);

    // Define card data with title and content
    const cards = [
        {
            title: 'Card One',
            content: 'This is the content of card one.',
            truckClass: 'scc_truck1',
            truckSrc: ufo// 使用絕對路徑
        },
        {
            title: 'Card Two',
            content: 'This is the content of card two.',
            truckClass: 'scc_truck2',
            truckSrc: ufo // 使用絕對路徑
        },
        {
            title: 'Card Three',
            content: 'This is the content of card three.',
            truckClass: 'scc_truck3',
            truckSrc: ufo // 使用絕對路徑
        },
    ];

    // Refs for multiple elements
    const cardRefs = useRef<HTMLDivElement[]>([]);
    const truckRefs = useRef<HTMLImageElement[]>([]);

    useEffect(() => {
        const container = scrollboxContainerRef.current;
        const scrollbox = scrollboxRef.current;
        if (!container || !scrollbox) return;

        const cardElements = cardRefs.current;
        const truckElements = truckRefs.current;

        let trigger_distance = 0;
        let border_distance = 0;
        let distance = 0;

        // Function to handle resize events
        const resize = () => {
            if (scrollbox && container) {
                scrollbox.style.height = `${container.offsetWidth}px`;
                const rect = scrollbox.getBoundingClientRect();
                trigger_distance = window.pageYOffset + rect.top;
                border_distance = trigger_distance + scrollbox.offsetHeight - window.innerHeight;
            }
        };

        // Function to handle scroll events
        const move = () => {
            const scrollY = window.scrollY;
            if (scrollY >= trigger_distance && scrollY <= border_distance) {
                distance = scrollY - trigger_distance;
                if (container) {
                    container.style.transform = `translateY(${distance}px)`;
                }
                const distance_x = (distance / (border_distance - trigger_distance)) * (container.offsetWidth - window.innerWidth);
                cardElements.forEach((card) => {
                    card.style.transform = `translateX(${-distance_x}px)`;
                });
                truckElements.forEach((truck) => {
                    truck.style.transform = `translateX(${distance_x * 1.2}px)`;
                });
            }
        };

        // Initial setup
        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('scroll', move);

        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('scroll', move);
        };
    }, []);

    return (
        <div className="horizontal-scroll">
            {/* Scrollbox Section */}
            <div className="scrollbox" ref={scrollboxRef}>
                <div className="scrollbox_container" ref={scrollboxContainerRef}>
                    {cards.map((card, index) => (
                        <div
                            className="scrollbox_container_card"
                            key={index}
                            ref={(el) => {
                                if (el) cardRefs.current[index] = el;
                            }}
                        >
                            {/* 標題 */}
                            <h2 className="card-title">{card.title}</h2>
                            {/* 內容 */}
                            <p className="card-content">{card.content}</p>
                            <img
                                className={`scc_truck ${card.truckClass}`}
                                src={card.truckSrc}
                                ref={(el) => {
                                    if (el) truckRefs.current[index] = el;
                                }}
                                alt="truck"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline CSS Styles */}
            <style>{`
                .horizontal-scroll {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    background-color: #ffffff; /* 將背景設為白色 */
                    box-sizing: border-box;
                }

                * {
                    padding: 0;
                    margin: 0;
                    font-size: 2vmin;
                    box-sizing: border-box;
                }

                p,
                img {
                    pointer-events: none;
                    user-select: none;
                }

                .scrollbox {
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                }

                .scrollbox_container {
                    display: flex;
                    justify-content: flex-start;
                    flex-shrink: 0;
                    /* Removed fixed height to prevent layout issues */
                }

                .scrollbox_container_card {
                    position: relative;
                    width: 65rem;
                    height: 40rem;
                    background-color: #f7f7f7;
                    border-radius: 5rem;
                    margin-left: 2rem; /* Adjusted margin to prevent overflow */
                    flex-shrink: 0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start; /* Align items to the top */
                    align-items: flex-start; /* Align items to the left */
                    padding: 2rem; /* Add padding to accommodate title and content */
                }

                .card-title {
                    font-family: sans-serif;
                    font-size: 3rem; /* Reduced font size */
                    color: #171717;
                    font-weight: 900;
                    text-transform: uppercase;
                    margin-bottom: 1rem; /* Add margin below title */
                    text-align: left; /* Align text to the left */
                    z-index: 2; /* Ensure title is above images */
                }

                .card-content {
                    font-family: sans-serif;
                    font-size: 3rem; /* Reduced font size */
                    color: #333333;
                    text-align: left; /* Align text to the left */
                    z-index: 2; /* Ensure content is above images */
                }

                .scc_truck {
                    position: absolute;
                    bottom: 0;
                    height: 50rem; /* Enlarged ufo image */
                    z-index: 1; /* Ensure images are below text */  
                    top: 100px;
                }

                .scc_truck1,
                .scc_truck2,
                .scc_truck3 {
                    left: 0;
                }

                /* Adjust positions for multiple trucks if needed */
                .scc_truck2 {
                    left: calc(-100% - 5rem);
                }

                .scc_truck3 {
                    left: calc(-200% - 10rem);
                }

                /* Responsive Adjustments */
                @media (max-width: 768px) {
                    .scrollbox_container_card {
                        width: 90%;
                        max-width: 90%;
                        margin-left: 1rem;
                        padding: 1rem; /* Adjust padding */
                    }

                    .card-title {
                        font-size: 2rem; /* Further reduced for mobile */
                        margin-bottom: 0.5rem;
                    }

                    .card-content {
                        font-size: 2rem; /* Further reduced for mobile */
                    }

                    .scc_truck {
                        height: 10rem; /* Adjusted size for mobile */
                    }
                }
            `}</style>
        </div>
    );
};

export default HorizontalScroll;
