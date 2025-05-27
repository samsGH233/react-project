
import logo from '../images/connectinSkillz logo.avif';

const NavBar = () => {

    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt="My description" width="50" />
            <ul className="nav-links">
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