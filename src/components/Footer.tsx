import './Footer.css'

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <p className="footer-copyright">© 2025 Kumudini Chauhan</p>
                        <p className="footer-tagline">Product Design Portfolio</p>
                    </div>

                    <div className="footer-email">
                        <a href="mailto:Kumudini.design17@gmail.com" className="email-link">
                            Kumudini.design17@gmail.com
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4 className="footer-heading">Links</h4>
                        <nav className="footer-nav">
                            <a href="#home">Home</a>
                            <a href="#work">Work</a>
                            <a href="#resume">Resume</a>
                            <a href="#contact">Contact</a>
                        </nav>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">Social</h4>
                        <nav className="footer-nav">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
                            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
                            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
