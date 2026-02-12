import React from 'react';
import SequentialReveal from '../ui/SequentialReveal';
import SectionDivider from '../ui/SectionDivider';
import useScrollParallax from '../../hooks/useScrollParallax';

const pillars = [
    { title: "2011", desc: "Established as a premier robotics techfest at SRM Vadapalani." },
    { title: "National", desc: "Participation from 100+ engineering institutions across India." },
    { title: "Industry", desc: "Featuring experts from DRDO, Nokia, and leading R&D ecosystems." },
    { title: "Talent", desc: "A pipeline of 2000+ robotics, AI, and embedded systems innovators." }
];

const AuthoritySection = () => {
    const parallaxOffset = useScrollParallax(0.05);

    return (
        <>
            <SectionDivider />
            <section id="authority" className="corporate-section bg-[#0A0A0A] bg-depth-radial relative overflow-hidden">

                {/* Parallax watermark */}
                <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
                    style={{ transform: `translateY(${parallaxOffset}px)` }}
                >
                    <span
                        className="text-[clamp(5rem,14vw,12rem)] font-[900] text-[rgba(255,215,0,0.025)] whitespace-nowrap tracking-[0.15em] select-none"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        EST. 2011
                    </span>
                </div>

                <div className="layout-container relative z-10">

                    <SequentialReveal>
                        <p className="section-label text-center">Our Legacy</p>
                    </SequentialReveal>

                    <SequentialReveal delay={1}>
                        <h2 className="section-headline text-4xl md:text-5xl text-center text-white mb-6">
                            <span className="gold-underline">
                                15+ Years of <span className="text-[#FFD700]">Robotics Legacy</span>
                            </span>
                        </h2>
                    </SequentialReveal>

                    <SequentialReveal delay={2}>
                        <p className="section-body text-center mx-auto mb-16">
                            Since 2011, XION has evolved into a national-level robotics platform
                            bridging academic innovation and industrial application.
                            We don't just build robots — we engineer the future.
                        </p>
                    </SequentialReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pillars.map((item, index) => (
                            <SequentialReveal key={index} delay={index + 3}>
                                <div className="glass p-8 text-left">
                                    <h3
                                        className="text-[#FFD700] text-3xl font-bold mb-3"
                                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </SequentialReveal>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default AuthoritySection;
