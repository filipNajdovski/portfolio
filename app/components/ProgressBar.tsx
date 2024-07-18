"use client"
import React, { useEffect } from 'react';

const ProgressBar = () => {

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
        };

        mainRenderElement.addEventListener("scroll", handleScroll, { passive: true });

        // Cleanup event listener on component unmount
        return () => {
            mainRenderElement.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array to run only on mount and unmount

    return (
        <div className="progress-header">
            <div className="progress-container">
                <div className="progress-bar" id="myBar"></div>
            </div>
        </div>
    );
}

export default ProgressBar;