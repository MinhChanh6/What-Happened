import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    React.useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const tl = gsap.timeline();

            tl.to(cursorRef.current, 0.3, {
                x: clientX,
                y: clientY
            });
        })

    }, [])


    return (
        <>
            <div className="cursor" ref={cursorRef}>
            </div>
        </>
    )
}

export default CustomCursor
