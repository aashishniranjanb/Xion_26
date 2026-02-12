import React from 'react';
import { motion } from 'framer-motion';

const FloatingNav = () => {
    const links = ['Authority', 'Legacy', 'Events', 'Sponsors', 'Contact'];

    return (
        <motion.nav
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 glass-panel px-8 py-4 rounded-full flex space-x-8"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 4, duration: 1 }} // Appear after loader
        >
            {links.map((link) => (
                <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-xion-gold text-xs font-mono uppercase tracking-widest transition-colors duration-300"
                >
                    {link}
                </a>
            ))}
        </motion.nav>
    );
};

export default FloatingNav;
