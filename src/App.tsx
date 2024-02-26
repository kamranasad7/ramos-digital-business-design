import Footer from './components/UI/Footer';
import Navbar from './components/UI/Navbar';
import Analytics from './pages/Analytics';
import Features from './pages/Features';
import GetStarted from './pages/GetStarted';
import RamosDemo from './pages/RamosDemo';
import TagLine from './pages/TagLine';

function App() {
    return (
        <div className='w-full mt-8'>
            <Navbar />

            <div className='mt-20 flex flex-col gap-28 mb-32'>
                <TagLine />
                <Analytics />
                <RamosDemo />
                <Features />
                <GetStarted />
            </div>

            <Footer />
        </div>
    )
}

export default App
