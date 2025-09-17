"use client"
import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
    const [hasAttemptedMinimize, setHasAttemptedMinimize] = useState(false);

    useEffect(() => {
        const mainRenderElement = document.querySelector('.main-render');
        if (!mainRenderElement) return;

        const handleScroll = (e: Event) => {
            const target = e.target as HTMLElement;
            let maxTop = 0;
            const sections = document.querySelectorAll('.main-render > section');
            const sectionsCount = sections.length;
            
            sections.forEach(section => {
                maxTop += section.clientHeight;
            });

            const currentTop = target.scrollTop;
            const surplus = currentTop / (sectionsCount - 1);
            const scrollPercentage = ((currentTop + surplus) / maxTop) * 100;

            const myBar = document.getElementById("myBar");
            if (myBar) {
                myBar.style.width = scrollPercentage + "%";
            }

            // Try to minimize browser UI when user starts scrolling
            if (currentTop > 10 && !hasAttemptedMinimize) {
                minimizeBrowserUI();
                setHasAttemptedMinimize(true);
            }
        };

        // Function to encourage browser UI minimization
        const minimizeBrowserUI = () => {
            // Try to trigger browser UI minimization by scrolling slightly
            setTimeout(() => {
                mainRenderElement.scrollTo({
                    top: mainRenderElement.scrollTop + 10,
                    behavior: 'auto'
                });
                
                setTimeout(() => {
                    mainRenderElement.scrollTo({
                        top: mainRenderElement.scrollTop - 10,
                        behavior: 'auto'
                    });
                }, 50);
            }, 100);
        };

        // Try to minimize browser UI on initial load
        setTimeout(() => {
            if (!hasAttemptedMinimize) {
                minimizeBrowserUI();
                setHasAttemptedMinimize(true);
            }
        }, 1000);

        mainRenderElement.addEventListener("scroll", handleScroll, { passive: true });

        // Cleanup event listener on component unmount
        return () => {
            mainRenderElement.removeEventListener("scroll", handleScroll);
        };
    }, [hasAttemptedMinimize]);

    return (
        <div className="progress-header">
            <div className="progress-container">
                <div className="progress-bar" id="myBar"></div>
            </div>
        </div>
    );
}

export default ProgressBar;