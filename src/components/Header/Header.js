import React, { useState, useEffect } from 'react'
import images from '../../assets/images/images';

const Header = () => {
    const [status, setStatus] = useState(false);
    const [header, setHeader] = useState(false);
    const handleOpenMenu = () => {
        setStatus(!status)
    }
    const handleFixMenu = () => {
        if (window.scrollY >= 80) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    };
    useEffect(() => {
        handleFixMenu();
    }, []);
    window.addEventListener('scroll', handleFixMenu);

    return (
        <header className={header ? 'header active' : 'header'}>
            <nav className="navbar">
                <div className="navbar-wrap">
                    <a href="#" className="navbar-logo"><img src={images.logo} alt="" /></a>
                    <ul className={`navbar-bar ${status ? 'open' : ''}`}>
                        <li className="navbar-item">
                            <a href="#" className="navbar-link">
                                <span className="navbar-span_one">
                                    Introduction
                                </span>
                                <span className="navbar-span_two">
                                    Introduction
                                </span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-link">
                                <span className="navbar-span_one">
                                    Solution
                                </span>
                                <span className="navbar-span_two">
                                    Solution
                                </span></a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-link">
                                <span className="navbar-span_one">
                                    Rate Plane
                                </span>
                                <span className="navbar-span_two">
                                    Rate Plane
                                </span>
                            </a>
                        </li>
                        <li className="line"></li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-link">
                                <span className="navbar-span_one">
                                    Login
                                </span>
                                <span className="navbar-span_two">
                                    Login
                                </span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-link">
                                <span className="navbar-span_one">
                                    Apply for free use
                                </span>
                                <span className="navbar-span_two">
                                    Apply for free use
                                </span></a>
                        </li>
                    </ul>
                    <button className="nav-burger hide-for-desktop" onClick={handleOpenMenu}>
                        <span className={`rectangle rectangle--top rectangle--small ${status ? 'open' : ''}`}></span>
                        <span className={`rectangle rectangle--middle ${status ? 'open' : ''}`}></span>
                        <span className={`rectangle rectangle--bottom rectangle--small ${status ? 'open' : ''}`}></span>
                    </button>
                </div>

            </nav>
        </header >
    )
}

export default Header
