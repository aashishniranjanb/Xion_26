import React from 'react';
import srmLogo from "../../assets/logos/srm-logo.png";
import xionLogo from "../../assets/logos/xion-logo.png";

const Navbar = () => {
    return (
        <nav
            className="fixed top-0 left-0 w-full navbar-glow"
            style={{
                height: '80px',
                zIndex: 100,
                background: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
            }}
        >
            <div
                className="w-full h-full flex items-center"
                style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
            >
                <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between relative">

                    {/* Left — SRM Logo */}
                    <div className="flex items-center">
                        <img
                            src={srmLogo}
                            alt="SRM Vadapalani"
                            style={{ height: '42px' }}
                            className="object-contain"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                    </div>

                    {/* Center — XION Logo (absolute center) */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
                        <img
                            src={xionLogo}
                            alt="XION 26"
                            style={{ height: '50px' }}
                            className="object-contain"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                    </div>

                    {/* Right — Solid Gold CTA */}
                    <div>
                        <a
                            href="#contact"
                            className="cta-button inline-block px-7 py-3 bg-[#FFD700] text-black font-semibold tracking-widest text-sm uppercase"
                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                        >
                            REGISTER NOW
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
