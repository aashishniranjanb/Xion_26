import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from "../components/layout/Navbar";
import HeroCinematic from "../components/cinematic/HeroCinematic";
import AuthoritySection from "../components/corporate/AuthoritySection";
import Loader from "../components/cinematic/Loader";
import StatsSection from "../components/corporate/StatsSection";
import EventsSection from "../components/corporate/EventsSection";
import SponsorshipSection from "../components/corporate/SponsorshipSection";
import ContactSection from "../components/corporate/ContactSection";
import ScrollProgress from "../components/ui/ScrollProgress";

const Home = () => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <Loader onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            {!loading && (
                <>
                    {/* Scroll Progress */}
                    <ScrollProgress />

                    <main className="w-full min-h-screen bg-[#0A0A0A] text-white">
                        {/* Navbar — fades in at 500ms */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <Navbar />
                        </motion.div>

                        <HeroCinematic />
                        <AuthoritySection />
                        <StatsSection />
                        <EventsSection />
                        <SponsorshipSection />
                        <ContactSection />
                    </main>
                </>
            )}
        </>
    );
};

export default Home;
