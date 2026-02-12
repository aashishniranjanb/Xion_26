import React, { useState, useEffect } from 'react';

const GlitchTitle = ({ text = "XION 26", className = "" }) => {
    const [isGlitching, setIsGlitching] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsGlitching(false);
        }, 600);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`glitch-wrapper ${isGlitching ? 'glitch-active' : 'glitch-stable'} ${className}`}>
            {/* Base Layer — always visible */}
            <span className="glitch-base text-[3.5rem] md:text-[5.5rem]">
                {text}
            </span>

            {/* Slice Layers — hidden on mobile via CSS */}
            <span className="glitch-slice glitch-slice-top text-[3.5rem] md:text-[5.5rem]" aria-hidden="true">
                {text}
            </span>
            <span className="glitch-slice glitch-slice-bottom text-[3.5rem] md:text-[5.5rem]" aria-hidden="true">
                {text}
            </span>
        </div>
    );
};

export default GlitchTitle;
