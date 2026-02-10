import { useEffect, useRef, useState } from 'react'
import './SelectedWork.css'

interface WorkSlide {
    id: number
    type: 'video' | 'image'
    src: string
    title: string
    description: string
}

const slides: WorkSlide[] = [
    {
        id: 1,
        type: 'video',
        src: '/mid/first_video.mp4',
        title: 'QMS ~ Modernising call quality audits for Call Centres Using AI',
        description: ''
    },
    {
        id: 2,
        type: 'image',
        src: '/mid/second.png',
        title: 'Redesigning a Complex CRM',
        description: 'Simplifying complex call center workflows'
    },
    {
        id: 3,
        type: 'image',
        src: '/mid/third.png',
        title: 'Predecto',
        description: 'Making learning more organized'
    }
]

function SelectedWork() {
    const [activeSlide, setActiveSlide] = useState(0)
    const sectionRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !containerRef.current) return

            const section = sectionRef.current
            const rect = section.getBoundingClientRect()
            const viewportHeight = window.innerHeight

            // Each slide gets a dedicated scroll zone
            // The section is 300vh tall, so each slide gets ~100vh of scroll space
            const scrollPerSlide = viewportHeight * 0.8 // 80vh per slide minimum
            const scrollStart = viewportHeight * 0.2 // Start triggering when 20% into viewport

            const currentPosition = -rect.top + scrollStart

            // Calculate which slide based on scroll position
            // Clamp to valid slide indices
            let slideIndex = Math.floor(currentPosition / scrollPerSlide)
            slideIndex = Math.max(0, Math.min(slideIndex, slides.length - 1))
            setActiveSlide(slideIndex)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial calculation

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section id="work" className="selected-work" ref={sectionRef}>
            <div className="selected-work-header">
                <h2 className="selected-work-title">Selected Work</h2>
                <p className="selected-work-subtitle">
                    Problems i design to turn <span className="meh">"meh"</span> into <span className="wow">"wow"</span>
                </p>
            </div>

            <div className="slides-container" ref={containerRef}>
                <div className="slides-frame">
                    {slides.map((slide, index) => {
                        const offset = activeSlide - index
                        const isPrev = index < activeSlide
                        const isNext = index > activeSlide
                        const isActive = index === activeSlide

                        return (
                            <div
                                key={slide.id}
                                className={`slide ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
                                data-offset={isPrev ? offset : 0}
                            >
                                <div className="slide-media-wrapper">
                                    {slide.type === 'video' ? (
                                        <video
                                            className="slide-media"
                                            src={slide.src}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    ) : (
                                        <img
                                            className="slide-media"
                                            src={slide.src}
                                            alt={slide.title}
                                        />
                                    )}
                                </div>
                                <div className="slide-info">
                                    <h3 className="slide-title">{slide.title}</h3>
                                    {slide.description && (
                                        <p className="slide-description">{slide.description}</p>
                                    )}
                                    <button className="slide-arrow" aria-label="View project">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="slide-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === activeSlide ? 'active' : ''}`}
                            onClick={() => setActiveSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SelectedWork
