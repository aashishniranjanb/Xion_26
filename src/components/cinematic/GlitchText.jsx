import React from 'react';

const GlitchText = ({ text, as: Component = 'span', className = "" }) => {
    return (
        <Component className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-gold-primary opacity-0 group-hover:opacity-100 group-hover:glitch" aria-hidden="true">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-100 group-hover:glitch" style={{ animationDelay: '0.1s' }} aria-hidden="true">
                {text}
            </span>
        </Component>
    );
};

export default GlitchText;
