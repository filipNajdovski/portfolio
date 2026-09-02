"use client"
import { useEffect } from 'react';

/**
 * Scroll progress bar.
 *
 * Two scroll modes have to be handled, and which one is live depends on the
 * breakpoint (see globals.css): on desktop `.main-render` is the scroll
 * container (scroll-snap); below 768px it collapses to `height: 100%` and the
 * document scrolls instead.
 *
 * Both reduce to the same ratio against whichever element actually scrolls, so
 * there is no need to walk sections and accumulate heights — the previous
 * implementation did, and fell through its own loop at the bottom of the page,
 * resetting the index to 0 and running the bar backwards exactly when it should
 * have read 100%.
 */
const ProgressBar = () => {
    useEffect(() => {
        const getScrollState = () => {
            const container = document.querySelector<HTMLElement>('.main-render');
            // the container only scrolls when it is actually overflowing; on
            // mobile scrollHeight === clientHeight and the document scrolls
            const usesContainer =
                !!container && container.scrollHeight > container.clientHeight + 1;

            if (usesContainer && container) {
                return {
                    scrolled: container.scrollTop,
                    max: container.scrollHeight - container.clientHeight,
                };
            }

            return {
                scrolled: window.scrollY,
                max: document.documentElement.scrollHeight - window.innerHeight,
            };
        };

        const handleScroll = () => {
            const bar = document.getElementById('myBar');
            if (!bar) return;

            const { scrolled, max } = getScrollState();
            const progress = max > 0 ? Math.min(1, Math.max(0, scrolled / max)) : 0;

            bar.style.width = `${progress * 100}%`;
        };

        // Bound to both: which element scrolls flips at the breakpoint, and
        // re-evaluating per event means a resize across it needs no reload.
        const container = document.querySelector<HTMLElement>('.main-render');
        container?.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });

        handleScroll();

        return () => {
            container?.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div className="progress-header">
            <div className="progress-container">
                <div className="progress-bar" id="myBar"></div>
            </div>
        </div>
    );
}

export default ProgressBar;
