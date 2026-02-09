import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <a href="/" className="logo">Kumudini Chauhan</a>

                <nav className="nav">
                    <a href="#work" className="nav-link">Work</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#resume" className="nav-link">Resume</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>

                <a href="#contact" className="cta-button">Get in Touch</a>
            </div>
        </header>
    )
}

export default Header
