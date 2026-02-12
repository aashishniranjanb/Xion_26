import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [bootStep, setBootStep] = useState(0);

    useEffect(() => {
        const timeline = [
            { step: 1, delay: 500 },  // Black
            { step: 2, delay: 1000 }, // Text: INITIALIZING CORE SYSTEM...
            { step: 3, delay: 1800 }, // Text: LOADING PROTOCOL: X26
            { step: 4, delay: 2600 }, // Text: ESTABLISHING CONNECTION...
            { step: 5, delay: 3400 }, // Glitch: ACCESS GRANTED
            { step: 6, delay: 4200 }, // Reveal
        ];

        let timeouts = [];

        timeline.forEach(({ step, delay }) => {
            const timeout = setTimeout(() => {
                setBootStep(step);
                if (step === 6) {
                    setTimeout(onComplete, 500);
                }
            }, delay);
            timeouts.push(timeout);
        });

        return () => timeouts.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black-deep flex flex-col items-center justify-center font-techno text-sm md:text-base pointer-events-none"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="w-80 text-left space-y-4">
                {bootStep >= 2 && (
                    <div className="flex items-center text-gray-500">
                        <span className="text-gold-primary mr-2">➜</span>
                        <span className="tracking-widest">INITIALIZING CORE SYSTEM...</span>
                    </div>
                )}
                {bootStep >= 3 && (
                    <div className="text-gray-400 pl-4">
                        LOADING PROTOCOL: <span className="text-white font-bold">X26</span>
                    </div>
                )}
                {bootStep >= 4 && (
                    <div className="text-gray-400 pl-4">
                        <span className="text-gray-500">ESTABLISHING CONNECTION...</span>
                    </div>
                )}
                {bootStep >= 5 && (
                    <div className="text-gray-400 pl-4">
                        STATUS: <span className="text-green-500 glitch inline-block">ACCESS GRANTED</span>
                    </div>
                )}
            </div>

            {/* Progress Bar Line */}
            {bootStep >= 2 && (
                <motion.div
                    className="absolute bottom-20 w-64 h-0.5 bg-gray-800 overflow-hidden"
                >
                    <motion.div
                        className="h-full bg-gold-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                    />
                </motion.div>
            )}
        </motion.div>
    );
};

export default Loader;
