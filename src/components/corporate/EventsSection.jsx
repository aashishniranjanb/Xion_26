import React from 'react';
import SequentialReveal from '../ui/SequentialReveal';
import SectionDivider from '../ui/SectionDivider';

const events = [
    { id: 1, title: "Robo Wars", category: "Combat", desc: "Head-to-head robot combat in an arena battle." },
    { id: 2, title: "Robo Soccer", category: "Sports", desc: "Autonomous bots compete on the pitch." },
    { id: 3, title: "RC Racing", category: "Speed", desc: "High-speed remote-controlled track races." },
    { id: 4, title: "Path Finder", category: "Autonomous", desc: "Line-following and maze-solving challenges." },
    { id: 5, title: "Paper Presentation", category: "Innovation", desc: "Technical research showcases." },
    { id: 6, title: "Workshops", category: "Education", desc: "Hands-on sessions with industry tools." },
];

const EventsSection = () => {
    return (
        <>
            <SectionDivider />
            <section id="events" className="corporate-section bg-[#1A1A1A] bg-grid-texture relative">
                <div className="layout-container relative z-10">

                    <SequentialReveal>
                        <p className="section-label">Event Lineup</p>
                    </SequentialReveal>

                    <SequentialReveal delay={1}>
                        <h2 className="section-headline text-4xl md:text-5xl text-white mb-2 gold-underline">
                            Event <span className="text-[#FFD700]">Protocols</span>
                        </h2>
                    </SequentialReveal>

                    <SequentialReveal delay={2}>
                        <p className="text-gray-500 text-sm mb-16" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                            6 CONFIRMED · 2 CLASSIFIED
                        </p>
                    </SequentialReveal>

                    {/* 2-column desktop, 1-column mobile */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {events.map((event, index) => (
                            <SequentialReveal key={event.id} delay={index + 3}>
                                <div className="glass event-card p-0 flex overflow-hidden group cursor-pointer">
                                    {/* Gold left accent bar */}
                                    <div className="w-1.5 bg-[#FFD700] opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 rounded-l-[14px]"></div>

                                    <div className="flex-1 p-6 flex items-center gap-6 relative z-10">
                                        {/* Large numeric ID */}
                                        <span
                                            className="text-5xl font-[900] text-[rgba(255,215,0,0.15)] group-hover:text-[rgba(255,215,0,0.3)] transition-colors select-none flex-shrink-0"
                                            style={{ fontFamily: "'Orbitron', sans-serif", minWidth: '80px' }}
                                            aria-hidden="true"
                                        >
                                            0{index + 1}
                                        </span>

                                        <div className="flex-1 space-y-1">
                                            <h3
                                                className="text-xl md:text-2xl text-white group-hover:text-[#FFD700] transition-all duration-200 group-hover:-translate-y-[2px]"
                                                style={{ fontFamily: "'Orbitron', sans-serif" }}
                                            >
                                                {event.title}
                                            </h3>
                                            <p className="text-sm text-gray-400" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                                                {event.desc}
                                            </p>
                                            <span className="inline-block text-[10px] text-[#FFD700] uppercase tracking-[0.2em] mt-1" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                                                {event.category}
                                            </span>
                                        </div>

                                        {/* Status indicator */}
                                        <div className="w-2 h-2 rounded-full bg-green-500/60 flex-shrink-0"></div>
                                    </div>
                                </div>
                            </SequentialReveal>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default EventsSection;
