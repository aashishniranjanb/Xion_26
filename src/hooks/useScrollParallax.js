import { useState, useEffect } from 'react';

const useScrollParallax = (speed = 0.03) => {
    const [offset, setOffset] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile, { passive: true });
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const handleScroll = () => {
            setOffset(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    return isMobile ? 0 : offset * speed;
};

export default useScrollParallax;
