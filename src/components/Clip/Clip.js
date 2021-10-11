import React from 'react'
import Video from '../../assets/video/video-demo.mp4';
import images from '../../assets/images/images';

const Clip = () => {
    return (
        <div className="clip">
            <img src={images.video_object8} alt="" className="video-object8" />
            <div className="container">
                <div className="clip-heading">
                    <img src={images.video_object3} alt="" className="video-object3" />
                    <div className="clip-title">
                        what happened
                    </div>
                    <div className="clip-desc">
                        How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first
                    </div>
                    <div className="story-button button productlist-overlay">
                        <span>
                            See More
                        </span>
                    </div>
                </div>
                <div className="clip-main">
                    <div className="video-heading">
                        <img src={images.video_object} alt="" className="video-object" />
                        <div className="video-title">
                            what happened
                        </div>
                        <div className="video-line">
                            <div></div>
                            <div></div>
                        </div>
                        <img src={images.video_icon} alt="" className="video-icon" />
                    </div>
                    <div className="video-url">
                        <div className="video-link">
                            www. whpn.com/brandstory
                        </div>
                        <div className="video-arrow">
                            →
                        </div>
                    </div>
                    <div className="video-wrap">
                        <video autoPlay controls="controls" className="video-video">
                            <source src={Video}
                                type="video/mp4"></source>
                        </video>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Clip
