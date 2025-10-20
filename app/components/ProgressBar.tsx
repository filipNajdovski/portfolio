"use client"
import React, { useEffect } from 'react';

const ProgressBar = () => {
    useEffect(() => {
        const handleScroll = () => {
            // Get the scroll container (try multiple elements)
            let scrollContainer: HTMLElement | null = document.querySelector('.main-render');
            
            // If main-render doesn't have scroll, check body
            if (!scrollContainer || scrollContainer.scrollHeight === scrollContainer.clientHeight) {
                scrollContainer = document.documentElement || document.body;
            }

            const sections = document.querySelectorAll('section');
            const sectionsCount = sections.length;
            
            // Calculate total scrollable height
            let totalHeight = 0;
            sections.forEach(section => {
                totalHeight += section.clientHeight;
            });

            // Get current scroll position
            const currentScroll = scrollContainer.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
            
            // Calculate viewport height
            const viewportHeight = window.innerHeight;
            
            // Calculate progress based on current section and scroll within section
            let progress = 0;
            
            if (sectionsCount > 0) {
                // Method 1: Calculate based on which section is in view
                let currentSectionIndex = 0;
                let accumulatedHeight = 0;
                
                for (let i = 0; i < sectionsCount; i++) {
                    accumulatedHeight += sections[i].clientHeight;
                    if (currentScroll < accumulatedHeight) {
                        currentSectionIndex = i;
                        break;
                    }
                }
                
                // Calculate progress within current section
                const sectionStart = currentSectionIndex > 0 ? 
                    accumulatedHeight - sections[currentSectionIndex].clientHeight : 0;
                const sectionProgress = (currentScroll - sectionStart) / sections[currentSectionIndex].clientHeight;
                
                // Overall progress
                progress = (currentSectionIndex + sectionProgress) / sectionsCount;
                
                // Alternative Method 2: Simple scroll percentage
                // progress = currentScroll / (totalHeight - viewportHeight);
            }

            const myBar = document.getElementById("myBar");
            if (myBar) {
                myBar.style.width = `${Math.min(progress * 100, 100)}%`;
            }
        };

        // Try multiple scroll containers
        const mainRenderElement = document.querySelector('.main-render');
        const scrollTarget = mainRenderElement || window;

        scrollTarget.addEventListener("scroll", handleScroll, { passive: true });
        
        // Also listen for resize to recalculate
        window.addEventListener("resize", handleScroll, { passive: true });
        
        // Initial calculation
        handleScroll();

        // Cleanup
        return () => {
            scrollTarget.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
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