import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../style sheets/Footer.css';
import logo from "../images/connectinSkillz-logo2.png";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="footer-first-section">
                    <img className="footer-logo" src={logo} alt="My description" width="50" />
                    <h2>ConnectinSkillz</h2>
                    <p>...We connect the dots</p>
                </div>

                <div className="footer-info">

                    <div className="footer-section contact">
                        <h3>Support</h3>
                        <p>Email: info@connectinskillz.org</p>
                        <p>Phone: +44 (0) 3301332756</p>
                    </div>



                <div className="footer-section links">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/success-stories">Success Stories</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section socials">
                    <h3>Social Media</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/www.connectinskillz.org/about/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/connectinskillz/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/company/connectinskillz/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    </div>
                </div>

                </div>

            </div>


            <div className="footer-bottom">
                <p className="footer-copy">&copy; {new Date().getFullYear()} ConnectinSkillz. All rights reserved.</p>
                <div className="terms-policy">
                    <p>Terms of service</p>
                    <p>Privacy policy</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;