import React from 'react';
import SequentialReveal from '../ui/SequentialReveal';
import SectionDivider from '../ui/SectionDivider';

const ContactSection = () => {
    return (
        <>
            <SectionDivider />
            <section id="contact" className="corporate-section bg-[#0A0A0A] relative">
                <div className="layout-container relative z-10">

                    <SequentialReveal>
                        <p className="section-label text-center">Connect</p>
                        <h2 className="section-headline text-3xl text-center text-white mb-16">
                            Authorized <span className="text-[#FFD700]">Connections</span>
                        </h2>
                    </SequentialReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl mx-auto">
                        <SequentialReveal delay={2}>
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <p className="section-label" style={{ marginBottom: '0.5rem' }}>Faculty Coordinators</p>
                                    <p className="text-white text-lg">Dr. V. Akila</p>
                                    <p className="text-white text-lg">Dr. Sanjay Kumar</p>
                                </div>
                                <div className="space-y-1 pt-2">
                                    <p className="text-gray-500 text-xs uppercase tracking-wider">Email</p>
                                    <p className="text-gray-400" style={{ fontFamily: "'Rajdhani', sans-serif" }}>srmvdp.xion2026@gmail.com</p>
                                </div>
                            </div>
                        </SequentialReveal>

                        <SequentialReveal delay={3}>
                            <div className="space-y-2">
                                <p className="section-label" style={{ marginBottom: '0.5rem' }}>Student Heads</p>
                                <p className="text-white text-lg">Student 1</p>
                                <p className="text-white text-lg">Student 2</p>
                            </div>
                        </SequentialReveal>
                    </div>

                    <SequentialReveal delay={5}>
                        <footer className="mt-24 pt-8 border-t border-white/5 text-gray-600 text-xs text-center font-mono">
                            <p>&copy; 2026 XION ROBOTICS. SYSTEM VERSION 2.6.5</p>
                        </footer>
                    </SequentialReveal>

                </div>
            </section>
        </>
    );
};

export default ContactSection;
