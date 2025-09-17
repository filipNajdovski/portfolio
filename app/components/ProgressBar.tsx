"use client"
import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
    const [hasAttemptedMinimize, setHasAttemptedMinimize] = useState(false);

    useEffect(() => {
        // Function to encourage browser UI minimization
        const minimizeBrowserUI = () => {
            if (!hasAttemptedMinimize) {
                // Try to trigger browser UI minimization
                setTimeout(() => {
                    window.scrollTo({
                        top: window.pageYOffset + 10,
                        behavior: 'smooth'
                    });
                    
                    setTimeout(() => {
                        window.scrollTo({
                            top: window.pageYOffset - 10,
                            behavior: 'smooth'
                        });
                        setHasAttemptedMinimize(true);
                    }, 100);
                }, 500);
            }
        };

        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;

            const myBar = document.getElementById("myBar");
            if (myBar) {
                myBar.style.width = progress + "%";
            }

            // Try to minimize browser UI when user starts scrolling
            if (window.scrollY > 10 && !hasAttemptedMinimize) {
                minimizeBrowserUI();
            }
        };

        // Try to minimize browser UI on initial load
        setTimeout(minimizeBrowserUI, 1000);

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
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