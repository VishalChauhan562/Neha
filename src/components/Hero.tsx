import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-decorations">
                {/* LEFT SIDE - Top to Bottom: Girl, Chai, Dog */}
                <div className="decoration decoration-girl card-style">
                    <img src="/top/girl.png" alt="Trek mode illustration" />
                </div>
                <img
                    src="/top/chai.png"
                    alt="Chai lover illustration"
                    className="decoration decoration-chai"
                />
                <img
                    src="/top/dog.png"
                    alt="Dog illustration"
                    className="decoration decoration-dog"
                />

                {/* RIGHT SIDE - Top to Bottom: Mandala, Bowl, Cry */}
                <div className="decoration decoration-mandala card-style">
                    <img src="/top/mandala.png" alt="Mandala art" />
                </div>
                <img
                    src="/top/bowl.png"
                    alt="Breakfast bowl illustration"
                    className="decoration decoration-bowl"
                />
                <img
                    src="/top/cry.png"
                    alt="Creative chaos sketch"
                    className="decoration decoration-cry"
                />
            </div>

            <div className="hero-content">
                <p className="hero-tagline">Everything about me on this board!!</p>

                <div className="hero-greeting">
                    <span className="wave-box">Hi !</span>
                </div>

                <h1 className="hero-title">I'm Kumudini</h1>

                <p className="hero-description">
                    0→1 AI Product designer with 2 years of experience
                    in SaaS, Website design and mobile app design.
                </p>

                <a href="#work" className="hero-cta">
                    Scroll down to See my work
                </a>
            </div>
        </section>
    )
}

export default Hero
