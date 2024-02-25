import Navbar from './components/UI/Navbar';
import { Analytics } from './components/pages/Analytics';
import { TagLine } from './components/pages/TagLine';

function App() {
    return (
        <div className='w-full'>
            <Navbar />

            <div className='mt-20'>
                <TagLine />
                <Analytics />
            </div>
        </div>
    )
}

export default App
