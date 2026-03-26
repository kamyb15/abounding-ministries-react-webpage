import { Hero } from './components/Hero';
import { About} from './components/About';


export default function App() {
    return (
        <div className='min-h-screen bg-[#FBF8F3]'> {/* minimum height: 100% of viewport height; background-color: #FBF8F3*/}
            <Hero />
            <About />
        </div>
    );
}