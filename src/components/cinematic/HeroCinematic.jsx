import React from 'react';
import { motion } from 'framer-motion';
import RobotBackground from "./RobotBackground";
import GlitchTitle from "./GlitchTitle";

const HeroCinematic = () => {
    return (
        <section className="relative w-full overflow-hidden bg-black" style={{ height: '100vh' }}>

            {/* Layer 1: Robot video (darkened in RobotBackground) */}
            <RobotBackground />

            {/* Layer 2: Radial gold glow behind title */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 1 }}>
                <div
                    className="rounded-full"
                    style={{
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
            </div>

            {/* Layer 3: Grain texture overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    zIndex: 2,
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
                    backgroundRepeat: 'repeat',
                    opacity: 0.4,
                }}
            />

            {/* Content — flex center */}
            <div
                className="relative flex flex-col items-center justify-center text-center px-6"
                style={{ zIndex: 10, height: '100%' }}
            >
                {/* Line 1: XION 26 — 6rem desktop */}
                <h1>
                    <GlitchTitle text="XION 26" className="text-[3rem] md:text-[6rem]" />
                </h1>

                {/* Line 2: Tagline — 200ms delay */}
                <motion.p
                    style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: '1.3rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(255, 215, 0, 0.6)',
                        marginTop: '18px',
                    }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    NATIONAL ROBOTICS PLATFORM
                </motion.p>

                {/* Line 3: CTA — 350ms delay */}
                <motion.a
                    href="#authority"
                    className="cta-button inline-block uppercase"
                    style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        marginTop: '28px',
                        minWidth: '220px',
                        height: '50px',
                        lineHeight: '46px',
                        textAlign: 'center',
                        border: '2px solid #FFD700',
                        color: '#FFD700',
                        fontSize: '0.95rem',
                    }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    whileHover={{
                        backgroundColor: '#FFD700',
                        color: '#000000',
                        transition: { duration: 0.2 }
                    }}
                >
                    ENTER THE SYSTEM
                </motion.a>
            </div>

            {/* Hero bottom fade transition */}
            <div
                className="absolute bottom-0 left-0 w-full pointer-events-none"
                style={{
                    zIndex: 11,
                    height: '120px',
                    background: 'linear-gradient(to bottom, transparent, #0A0A0A)',
                }}
            />

        </section>
    );
};

export default HeroCinematic;
