import Header from './components/Header'
import Hero from './components/Hero'
import ToolStack from './components/ToolStack'
import SelectedWork from './components/SelectedWork'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <ToolStack />
                <SelectedWork />
                <Interests />
            </main>
            <Footer />
        </div>
    )
}

export default App
