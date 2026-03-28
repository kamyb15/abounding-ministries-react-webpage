import { Hero } from './components/Hero';
import { About} from './components/About';
import {GirlsNight} from './components/GirlsNight';
import {Blog} from './components/Blog';
import {Contact} from './components/Contact';


export default function App() {
    return (
        <div className='min-h-screen bg-[#FBF8F3]'> {/* minimum height: 100% of viewport height; background-color: #FBF8F3*/}
            <Hero />
            <About />
            <GirlsNight />
            <Blog />
            <Contact />
        </div>
    );
}