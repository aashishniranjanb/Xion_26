import React from 'react';
import { motion } from 'framer-motion';

const SequentialReveal = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.7,
                delay: delay * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default SequentialReveal;
