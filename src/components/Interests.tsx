import { useState } from 'react'
import './Interests.css'

const interests = [
    { name: 'Reading', image: '/bottom/reading.png' },
    { name: 'Doodling', image: '/bottom/doodling.png' },
    { name: 'Travelling', image: '/bottom/traveling.png' },
    { name: 'Trekking', image: '/bottom/trekking.png' },
    { name: 'Eating', image: '/bottom/eating.png' },
    { name: 'Brewing ideas', image: '/bottom/brewing.png' },
]

function Interests() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section id="interests" className="interests">
            <div className="interests-list">
                {interests.map((interest, index) => (
                    <span
                        key={interest.name}
                        className={`interest-item ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {interest.name}
                    </span>
                ))}
            </div>

            <div className="interests-display">
                <img
                    src={interests[activeIndex].image}
                    alt={interests[activeIndex].name}
                    className="interest-image"
                />
            </div>
        </section>
    )
}

export default Interests
