import { Heart } from 'lucide-react';

export function Hero() {
    // function scrollToSection -> takes single argument: id, which is a string (the id of the HTML element to scroll to (ex: about, contact))
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);        // find the element -> looks for element with given id, names it element.
        if (element) {                                      // if(element) -> checking if the element exists. If it does -> move on to stuff inside, if not it returns null.
            element.scrollIntoView({ behavior: 'smooth'});  // scrollIntoView -> built-in browser function that scrolls the page so element
        }
    };

    return (
        <section id='home' className=' pt-16 sm:pt-20 min-h-screen flex items-center bg-linear-to-br from-[#E8D5C4] via-[#F5EBE0] to-[#D4C5B9]'>
            <div id='container' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-40 py-12 sm:py-20'>
                <div id='grid' className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>

                    <div id='left-content' className='order-2 lg:order-1'>
                        <div id='verse-pill' className='inline-flex items-center space-x-2 bg-[#DFB8A8]/30 px-5 py-2.5 rounded-full mb-6'>
                            <Heart size={16} className='text-[#C98B7B]' fill='#C98B7B' />
                            <span className='text-sm '>Romans 15:13</span>
                        </div>

                        <h1 className='text-4xl sm:text-5xl lg:text-6xl mb-6'>
                            Hey friend! I'm so glad you're here!
                        </h1>
                        
                        <div className='prose prose-lg text-[#6B5D50] mb-8 space-y-4'>
                            <p>
                                Abounding Ministries began when a few friends and I realized that we each knew young
                                women who were struggling to find intentional, Christ-centered community. It's so easy,
                                in the hustle and bustle of everyday life, to forget that God created us to be surrounded
                                by like-minded believers!
                            </p>
                            <p>
                                Abounding exists to foster genuine community - one that encourages you, challenges you to
                                grow closer to Christ, and reminds you that you are deeply known and loved by God.
                                Our prayer is that as you connect with this community, you'll be reminded of God's abounding
                                love and find joy in walking with Him alongside others. Whether you've been following Jesus
                                for years or are just beginning your journey, there's a place for you at the table!
                            </p>
                            <p className='italic text-[#9D7B6B]'>
                                Love, the Abounding Ministries Team
                            </p>
                        </div>
                        <div id='cta_buttons' className='flex flex-col sm:flex-row justify-center gap-4'>
                            <button
                                onClick={() => scrollToSection('girls-night')}
                                className='px-8 py-3.5 bg-[#A89B8E] text-white rounded-full hover:bg-[#9A8A7D] transition-colors shadow-md'
                            >Girls Night
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className='px-8 py-3.5 bg-[#DFB8A8] text-white rounded-full hover:bg-[#D4A898] transition-colors shadow-md'
                            >Get Involved
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className='px-8 py-3.5 bg-[#B8C5C9] text-white rounded-full hover:bg-[#A8B5B9] transition-colors shadow-md'
                            >Learn More About Us
                            </button>
                        </div>
                    </div>
                    <div id='right-content' className='order-1 lg:order-2'>
                        <img
                            src="images/abounding.png"
                            alt='young women laughing together'
                            className='w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-[2rem] shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

