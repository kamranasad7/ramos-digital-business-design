import Navbar from './components/UI/Navbar';
import { Analytics } from './pages/Analytics';
import { TagLine } from './pages/TagLine';

function App() {
    return (
        <div className='w-full'>
            <Navbar />

            <div className='mt-20 flex flex-col gap-28'>
                <TagLine />
                <Analytics />
            </div>
        </div>
    )
}

export default App
