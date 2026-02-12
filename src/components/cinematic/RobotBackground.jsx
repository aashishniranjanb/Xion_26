import React from 'react';
import robotVideo from "../../assets/hero/robot-placeholder.mp4";

const RobotBackground = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
            <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={robotVideo} type="video/mp4" />
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Gold shimmer */}
            <div className="absolute inset-0 gold-shimmer opacity-20"></div>
        </div>
    );
};

export default RobotBackground;
