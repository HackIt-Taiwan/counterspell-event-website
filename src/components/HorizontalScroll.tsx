// src/components/HorizontalScroll.tsx

import React, { useEffect, useRef, useContext } from 'react';
import ufo from '../assets/ufo.svg';
import { SmoothScrollContext } from '../contexts/SmoothScrollContext';

const HorizontalScroll: React.FC = () => {
    // 引用 DOM 元素
    const scrollboxContainerRef = useRef<HTMLDivElement>(null);
    const scrollboxRef = useRef<HTMLDivElement>(null);

    // 从上下文中获取平滑滚动值
    const smoothScrollY = useContext(SmoothScrollContext);

    // 定义卡片数据
    const cards = [
        {
            title: '報名資格是什麼？',
            content: '全國各級高中（職）學生、專科一年級至三年級學生，以及非學校型態實驗教育學生均可參加。',
            truckClass: 'scc_truck1',
            truckSrc: ufo,
        },
        {
            title: '活動是否免費？',
            content: '是的，參加活動完全免費，並提供豐富的獎品。',
            truckClass: 'scc_truck2',
            truckSrc: ufo,
        },
        {
            title: '需攜帶哪些物品？',
            content: '參賽者需攜帶筆記型電腦、充電器、個人衛生用品及其他個人需求物品。具體列表將在活動前公布。',
            truckClass: 'scc_truck3',
            truckSrc: ufo,
        },
    ];

    // 多个元素的引用
    const cardRefs = useRef<HTMLDivElement[]>([]);
    const truckRefs = useRef<HTMLImageElement[]>([]);

    // 初始设置
    useEffect(() => {
        const resize = () => {
            const container = scrollboxContainerRef.current;
            const scrollbox = scrollboxRef.current;
            if (!container || !scrollbox) return;

            scrollbox.style.height = `${container.offsetWidth}px`;
        };

        resize();
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    // 当 smoothScrollY 变化时更新位置
    useEffect(() => {
        const container = scrollboxContainerRef.current;
        const scrollbox = scrollboxRef.current;
        if (!container || !scrollbox) return;

        const cardElements = cardRefs.current;
        const truckElements = truckRefs.current;

        // 获取 scrollbox 的边界矩形
        const rect = scrollbox.getBoundingClientRect();

        // 计算 scrollbox 相对于视口的开始和结束位置
        const start = rect.top;
        const end = rect.bottom - window.innerHeight;

        // 如果 scrollbox 在视口内
        if (start <= 0 && end >= 0) {
            // 计算滚动进度，范围从 0 到 1
            const progress = Math.min(Math.max(-start / (rect.height - window.innerHeight), 0), 1);

            // 垂直位移
            const distanceY = progress * (rect.height - window.innerHeight);
            container.style.transform = `translateY(${distanceY}px)`;

            // 水平位移
            const distanceX = progress * (container.offsetWidth - window.innerWidth);
            cardElements.forEach((card) => {
                card.style.transform = `translateX(${-distanceX}px)`;
            });
            truckElements.forEach((truck) => {
                truck.style.transform = `translateX(${distanceX * 1.2}px)`;
            });
        }
    }, [smoothScrollY]);

    return (
        <div className="horizontal-scroll">
            {/* Scrollbox 部分 */}
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
                            {/* 标题 */}
                            <h2 className="card-title">{card.title}</h2>
                            {/* 内容 */}
                            <p className="card-content">{card.content}</p>
                            {/* UFO 图片 */}
                            <img
                                className={`scc_truck ${card.truckClass}`}
                                src={card.truckSrc}
                                ref={(el) => {
                                    if (el) truckRefs.current[index] = el;
                                }}
                                alt="ufo"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* 内联 CSS 样式 */}
            <style>{`
                .horizontal-scroll {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    background-color: #ffffff;
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
                }

                .scrollbox_container_card {
                    position: relative;
                    width: 65rem;
                    height: 40rem;
                    background-color: #f7f7f7;
                    border-radius: 5rem;
                    margin-left: 3rem;
                    flex-shrink: 0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    padding: 5rem 6rem;
                }

                .card-title {
                    font-family: sans-serif;
                    font-size: 3rem;
                    color: #171717;
                    font-weight: 900;
                    text-transform: uppercase;
                    margin-bottom: 1rem;
                    text-align: left;
                    z-index: 2;
                }

                .card-content {
                    font-family: sans-serif;
                    font-size: 1.5rem;
                    color: #333333;
                    text-align: left;
                    z-index: 2;
                }

                .scc_truck {
                    position: absolute;
                    bottom: 0;
                    height: 50rem;
                    z-index: 1;
                    top: 100px;
                }

                .scc_truck1,
                .scc_truck2,
                .scc_truck3 {
                    left: 0;
                }

                .scc_truck2 {
                    left: calc(-100% - 5rem);
                }

                .scc_truck3 {
                    left: calc(-200% - 10rem);
                }

                /* 响应式调整 */
                @media (max-width: 768px) {
                    .scrollbox_container_card {
                        width: 90%;
                        max-width: 90%;
                        margin-left: 1rem;
                        padding: 1rem; /* 调整内边距 */
                    }

                    .card-title {
                        font-size: 2rem;
                        margin-bottom: 0.5rem;
                    }

                    .card-content {
                        font-size: 2rem;
                    }

                    .scc_truck {
                        height: 10rem; /* 为移动设备调整大小 */
                    }
                }
            `}</style>
        </div>
    );
};

export default HorizontalScroll;
