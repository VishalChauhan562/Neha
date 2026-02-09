import './ToolStack.css'
import { SiFigma, SiWebflow, SiMiro, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si'
import { FaGoogle, FaHeart } from 'react-icons/fa'

const tools = [
    { name: 'Figma', icon: SiFigma, hasBackground: true, color: '#F24E1E' },
    { name: 'NotebookLM', icon: FaGoogle, hasBackground: true, color: '#4285F4' },
    { name: 'Webflow', icon: SiWebflow, hasBackground: false, color: '#4353FF' },
    { name: 'Lovable', icon: FaHeart, hasBackground: true, color: '#FF6B6B' },
    { name: 'Miro', icon: SiMiro, hasBackground: false, color: '#FFD02F' },
    { name: 'Illustrator', icon: SiAdobeillustrator, hasBackground: true, color: '#FF9A00' },
    { name: 'Photoshop', icon: SiAdobephotoshop, hasBackground: true, color: '#31A8FF' },
]

function ToolStack() {
    return (
        <section className="tool-stack" id="about">
            <h2 className="tool-stack-title">Tool Stack</h2>

            <div className="tools-container">
                {tools.map((tool) => (
                    <div key={tool.name} className="tool-item">
                        <div className={`tool-icon-wrapper ${tool.hasBackground ? 'with-bg' : ''}`}>
                            <tool.icon className="tool-icon" style={{ color: tool.color }} />
                        </div>
                        <span className="tool-name">{tool.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ToolStack
