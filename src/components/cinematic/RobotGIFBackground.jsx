import React from 'react';

const RobotGIFBackground = () => {
    // In a real scenario, this would import a GIF or MP4
    // For now, we use a CSS abstract representation or a placeholder URL if available
    const placeholderGif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtY3h6Y2d5Y3h6Y2d5Y3h6Y2d5Y3h6Y2d5Y3h6Y2d5Y3h6Y2d5/3o7TKSjRrfIPjeiVyM/giphy.gif"; // Placeholder robot arm or similar

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            {/* Layer 1: The Visual */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity"
                style={{ backgroundImage: `url(${placeholderGif})` }}
            />

            {/* Layer 2: Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-xion-black via-transparent to-black opacity-90" />

            {/* Layer 3: Gold Rim Light / Scanlines */}
            <div className="absolute inset-0 bg-[url('/scanline.png')] opacity-10 pointer-events-none" />

            {/* Layer 4: Interactive Shader (Simple radial gradient for now) */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-xion-black opacity-80" />
        </div>
    );
};

export default RobotGIFBackground;
