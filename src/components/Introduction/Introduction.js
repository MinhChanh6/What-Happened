import React from 'react'
import images from '../../assets/images/images';

const Introduction = () => {
    return (
        <div className="introduction" style={{
            backgroundImage: `url(${images.intro_pg})`,
        }}>
            <div className="container">
                <div className="introduction-heading">
                    What Happened!
                </div>
                <div className="introduction-desc">
                    How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                    step to your brand's success. How to create
                    mobile-optimized videos in minutes.
                </div>
            </div>
        </div >
    )
}

export default Introduction
