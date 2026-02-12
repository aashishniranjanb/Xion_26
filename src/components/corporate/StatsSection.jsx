import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import SequentialReveal from '../ui/SequentialReveal';
import SectionDivider from '../ui/SectionDivider';

const stats = [
    { id: 1, label: "Participants", value: 2000, suffix: "+" },
    { id: 2, label: "Colleges", value: 100, suffix: "+" },
    { id: 3, label: "Years Legacy", value: 15, suffix: "+" },
    { id: 4, label: "National Reach", value: 25, suffix: " States" },
];

const Counter = ({ value, duration = 2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const end = value;
            const totalFrames = duration * 60;
            const increment = end / totalFrames;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}</span>;
};

const StatsSection = () => {
    return (
        <>
            <SectionDivider />
            <section className="corporate-section bg-[#0A0A0A] bg-grid-texture relative">
                <div className="layout-container relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <SequentialReveal key={stat.id} delay={index}>
                                <div className="space-y-3">
                                    <h3 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                                        <Counter value={stat.value} />{stat.suffix}
                                    </h3>
                                    <p className="section-label">{stat.label}</p>
                                </div>
                            </SequentialReveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default StatsSection;
