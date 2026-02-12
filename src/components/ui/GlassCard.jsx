import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "", hoverEffect = true }) => {
    return (
        <motion.div
            className={`glass p-6 ${className}`}
            whileHover={hoverEffect ? {
                y: -6,
                transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
            } : {}}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
