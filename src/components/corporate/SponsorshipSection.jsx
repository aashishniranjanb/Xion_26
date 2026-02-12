import React from 'react';
import SequentialReveal from '../ui/SequentialReveal';
import SectionDivider from '../ui/SectionDivider';

const benefits = [
    {
        title: "Brand Visibility",
        desc: "Prime logo placement across event stages, digital campaigns, and official assets."
    },
    {
        title: "Talent Pipeline",
        desc: "Direct access to high-performing robotics, AI, and embedded systems students."
    },
    {
        title: "Industry Showcase",
        desc: "On-site technology demonstrations and keynote opportunities."
    },
    {
        title: "Media Exposure",
        desc: "Featured coverage across campus networks and event promotions."
    }
];

const SponsorshipSection = () => {
    return (
        <>
            <SectionDivider />
            <section id="sponsors" className="corporate-section bg-[#0A0A0A] bg-depth-radial bg-grid-texture relative overflow-hidden">

                {/* Top gold gradient border */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,215,0,0.4)] to-transparent"></div>

                {/* Subtle gold ambient glow */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04] pointer-events-none">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#FFD700_0%,_transparent_70%)] blur-[120px]"></div>
                </div>

                <div className="layout-container relative z-10">

                    {/* Section Label */}
                    <SequentialReveal>
                        <p className="section-label text-center">Partnership</p>
                    </SequentialReveal>

                    {/* Headline */}
                    <SequentialReveal delay={1}>
                        <h2 className="section-headline text-4xl md:text-5xl text-center text-white mb-4">
                            ENGINEER THE FUTURE <span className="text-[#FFD700]">WITH US</span>
                        </h2>
                    </SequentialReveal>

                    {/* Body */}
                    <SequentialReveal delay={2}>
                        <p className="section-body text-center mx-auto mb-16">
                            Align your brand with a national robotics ecosystem shaping the next generation of autonomous systems engineers.
                        </p>
                    </SequentialReveal>

                    {/* 4 Value Blocks */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {benefits.map((item, index) => (
                            <SequentialReveal key={index} delay={index + 3}>
                                <div className="glass p-8 text-left">
                                    <h3 className="text-xl font-semibold text-[#FFD700] mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </SequentialReveal>
                        ))}
                    </div>

                    {/* CTA Block (T07) */}
                    <SequentialReveal delay={8}>
                        <div className="max-w-2xl mx-auto text-center p-10 border border-[rgba(255,215,0,0.3)] rounded-2xl bg-gradient-to-br from-[rgba(255,215,0,0.06)] to-transparent cta-glow">
                            <p className="section-label mb-4">Limited Strategic Slots Available</p>
                            <h3 className="text-2xl md:text-3xl text-white mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                                Become a Strategic Partner
                            </h3>
                            <a
                                href="/sponsorship-deck.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button inline-block px-12 py-4 bg-[#FFD700] text-black font-bold tracking-widest rounded-md hover:bg-white transition-all duration-300 text-lg uppercase"
                                style={{ fontFamily: "'Orbitron', sans-serif" }}
                            >
                                DOWNLOAD SPONSORSHIP DECK
                            </a>
                        </div>
                    </SequentialReveal>

                </div>
            </section>
        </>
    );
};

export default SponsorshipSection;
