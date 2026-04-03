import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
            setIsOpen(false);
        }
    };


return (
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-[#FBF8F3]/95 backdrop-blur-sm shadow-sm' : 'bg-[#FBF8F3]'
  }`}>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16 sm:h-20'>
            {/* Logo */}
            <button
                onClick={() => scrollToSection('home')}
                className='flex items-center space-x-2'
            >
                <div className='text-2xl sm:text-3xl text-[#9D7B6B]'>
                    Abounding Ministry
                </div>
            </button>

            {/* Desktop Navigaation*/}
            <div className='hidden md:flex space-x-8'>
                <button onClick={() => scrollToSection('home')} className='text-[#7A6B5D] hover:text-[#9D7B6B] transition-colors'>
                    Home
                </button>
                <button onClick={() => scrollToSection('about')} className='text-[#7A6B5D] hover:text-[#9D7B6B] transition-colors'>
                    About
                </button>
                <button onClick={() => scrollToSection('girls-night')} className='text-[#7A6B5D] hover:text-[#9D7B6B] transition-colors'>
                    Girls Night
                </button>
                <button onClick={() => scrollToSection('blog')} className='text-[#7A6B5D] hover:text-[#9D7B6B] transition-colors'>
                    Blog
                </button>
                <button onClick={() => scrollToSection('contact')} className='text-[#7A6B5D] hover:text-[#9D7B6B] transition-colors'>
                    Contact
                </button>
            </div>

            {/* Mobile Menu Button*/}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='md:hidden p-2 text-[#7A6B5D] hover:text-[#9D7B6B]'
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden pb-4 space-y-2'>
                    <button
                        onClick={() => scrollToSection('home')}
                        className='block w-full text-left px-4 py-2 text-[#7A6B5D] hover:bg-[#F3E9E1] rounded-lg'
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollToSection('about')}
                        className='block w-full text-left px-4 py-2 text-[#7A6B5D] hover:bg-[#F3E9E1] rounded-lg'
                    >
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection('girls-night')}
                        className='block w-full text-left px-4 py-2 text-[#7A6B5D] hover:bg-[#F3E9E1] rounded-lg'
                    >
                        Girls Night
                    </button>
                    <button
                        onClick={() => scrollToSection('blog')}
                        className='block w-full text-left px-4 py-2 text-[#7A6B5D] hover:bg-[#F3E9E1] rounded-lg'
                    >
                        Blog
                    </button>
                    <button
                        onClick={() => scrollToSection('home')}
                        className='block w-full text-left px-4 py-2 text-[#7A6B5D] hover:bg-[#F3E9E1] rounded-lg'
                    >
                        Contact
                    </button>
                </div>
            )}
    </div>
  </nav>
);
};