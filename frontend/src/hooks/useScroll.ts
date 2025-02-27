import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const mainElement = document.querySelector('main');
        
        const handleScroll = () => {
            if (mainElement) {
                const isScrolled = mainElement.scrollTop > 10;
                setScrolled(isScrolled);
            }
        };

        mainElement?.addEventListener('scroll', handleScroll);
        return () => mainElement?.removeEventListener('scroll', handleScroll);
    }, []);

    return scrolled;
};
