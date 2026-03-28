import { BookOpen, Calendar, Heart } from 'lucide-react';

export function Blog() {
    return (
        <section id='Blog' className='py-20 sm:py-32 bg-[#F5EBE0]'>
            <div id='Blog-container' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl sm:text-5xl text-[#5B4D3F] mb-4'>Blog & Resources</h2>
                    <div className='w-16 h-0.5 bg-[#B8C5C9] mx-auto'></div>
                </div>

                {/* Coming Soon Card */}
                <div className='max-w-3xl mx-auto'>
                    <div className='bg-white/70 backdrop-blur rounded-[2rem] p-12 sm:p-16 text-center shadow-md'>
                        <div className='inline-flex items-center justify-center w-16 h-16  bg-[#DFB8A8]/40 rounded-full mb-6'>
                            <Heart size={32} className='text-[#C98B7B]'/>
                        </div>
                        <h3 className='text-3xl text-[#5B4D3F] mb-4'>Coming Soon!</h3>
                        <p className='text-lg text-[#6B5D50] mb-8 leading-relaxed'>
                            We're working on creating a space for ministry updates, devotionals, and reflectios to encourage you 
                            in your walk with Christ. Check back soon for more content!
                        </p>

                        {/* Preview Cards */}
                        <div className='grid sm:grid-cols-2 gap-6 mt-12'>
                            <div className='bg-[#B8C5C9]/20 rounded-[1.5rem] p-6 text-left hover:shadow-sm transition-shadow'>
                                <div className='flex items-center gap-2 text-sm text-[#8B9EA5] mb-3'>
                                    <BookOpen size={16}/>
                                    <span>Devotionals</span>
                                </div>
                                <h4 className='text-lg text-[#5B4D3F] mb-2'>Weekly Reflections</h4>
                                <p className='text-sm text-[#6B5D50]'>
                                    Short devotionals to encourage you throughout the week.
                                </p>
                            </div>

                            <div className='bg-[#A89B8E]/20 rounded-[1.5rem] p-6 text-left hover:shadow-sm transition-shadow'>
                                <div className='flex items-center gap-2 text-sm text-[#9D7B6B] mb-3'>
                                    <Calendar size={16}/>
                                    <span>Ministry Updates</span>
                                </div>
                                <h4 className='text-lg text-[#5B4D3F] mb-2'>Stay Connected</h4>
                                <p className='text-sm text-[#6B5D50]'>
                                    Get the latest news, event recaps, and testimonies from our community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};