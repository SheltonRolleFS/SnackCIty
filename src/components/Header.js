import React from 'react'
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <header id="page-header">
            <div className="content-container">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>

                <ul className="nav-links">
                    <a href="/browse">
                        <li className="link">Browse</li>
                    </a>
                    <a href="/contact">
                        <li className="link">Contact Us</li>
                    </a>
                    <li className="link">
                        <button className="profile-btn"><img src={logo} alt="profile"/></button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header