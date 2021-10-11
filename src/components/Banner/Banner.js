import React from 'react';
import images from '../../assets/images/images';



const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-flex">
                <div className="banner-heading">
                    Launching open event!
                </div>
                <div className="banner-content">
                    <img src={images.shape1} alt="" className="banner-shape1" />
                    <span>W</span>
                    <span>H</span>
                    <span>A</span>
                    <span>T</span>
                    <img src={images.shape2} alt="" className="banner-shape2" />
                </div>
                <div className="banner-content">
                    <span>H</span>
                    <img src={images.polygon} alt="" className="banner-polygon" />
                    <span>P</span>
                    <span>P</span>
                    <span>E</span>
                    <span>N</span>
                    <span>E</span>
                    <span>D</span>
                    <span>!</span>

                </div>
                <div className="banner-content">
                    {/* <img src={images.shape3} alt="" className="banner-shape3" /> */}
                    <span>M</span>
                    <span>A</span>
                    <span>R</span>
                    <span>-</span>
                    <span>K</span>
                    <span>E</span>
                    <span>T</span>
                </div>
                <div className="banner-content">
                    <div className="banner-button button button--overlay">
                        <span>Lorem Ipsum</span>
                    </div>
                    <div className="banner-arrow hide-for-mobile">→</div>
                    <div className="banner-arrow hide-down-arrow">↓</div>
                    <div className="banner-market">
                        market <br /> launching!
                    </div>
                    <div className="banner-arrow hide-for-mobile">→</div>
                    <div className="banner-arrow hide-down-arrow">↓</div>
                    <div className="banner-button button button--overlay">
                        <span>Lorem Ipsum</span>
                    </div>

                </div>
            </div>
            {/* <img src={banner} alt="" /> */}
        </div>
    )
}

export default Banner
