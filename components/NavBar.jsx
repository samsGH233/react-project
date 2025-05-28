import React, { useEffect, useState } from 'react';
import logo from '../images/connectinSkillz logo.avif';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
            document.documentElement.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
            document.documentElement.classList.remove('no-scroll');
        }
    }, [isOpen]);


    return (
        <nav className="navbar">

            <img className="logo" src={logo} alt="My description" width="50" />

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <GiHamburgerMenu />
            </div>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li className="close-icon">
                    <AiOutlineClose onClick={() => setIsOpen(false)} />
                </li>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Courses</a></li>
                <li><a href="#contact">Plans</a></li>
                <li><a href="#contact">Events</a></li>
                <li><a href="#contact">Be a Trainer</a></li>
            </ul>
            <div className="login-section">
                <p>Login</p>
                <button>Getting Started</button>
            </div>
        </nav>
    );
}

export default NavBar;