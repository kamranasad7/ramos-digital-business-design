import Footer from './components/UI/Footer';
import Navbar from './components/UI/Navbar';
import Analytics from './pages/Analytics';
import Efficiency from './pages/Efficiency';
import Features from './pages/Features';
import GetStarted from './pages/GetStarted';
import RamosDemo from './pages/RamosDemo';
import TagLine from './pages/TagLine';

function App() {
    return (
        <div className='w-full mt-8'>
            <Navbar />

            <div className='flex flex-col mt-20 mb-32 gap-28'>
                <TagLine />
                <Analytics />
                <Efficiency />
                <RamosDemo />
                <Features />
                <GetStarted />
            </div>

            <Footer />
        </div>
    )
}

export default App
