import { Heart, Users, Sparkles } from 'lucide-react';

export function About() {
    return (
        <section id='about' className='border py-20 sm:py-32 bg-[#F5EBE0]'>
            <div id='container' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div id='header' className='text-center mb-16'>
                    <h2 className='text-4xl sm:text-5xl text-[#5B4D3F] mb-4'>About Us</h2>
                    <div className='border w-16 h-0.5 bg-[#DFB8A8] mx-auto'></div>
                </div>
            
                <div id='Mission' className='border w-auto bg-white/70 backdrop-blur rounded-[2rem] p-8 sm:p-12 mb-16 shadow-md'>
                    <div id='items-container' className='max-w-3xl mx-auto text-center'>
                        <div id='heart-container' className='inline-flex items-center justify-center w-14 h-15 bg-[#DFB8A8]/40 rounded-full mb-6'>
                            <Heart size={26} className='text-[#C98B7B]' fill='#C98B7B'></Heart>
                        </div>
                        <h3 className='text-2xl sm:text-3xl text-[#5B4D3F] mb-6'>Our Mission</h3>
                        <p className='text-lg text-[#6B5D50] leading-relaxed'>
                            Abounding Ministries exists to connect young women through intentional and joyful community,
                            encouraging them to grow deeper in their relationship with Christ and live out their faith with
                            confidence and purpose.
                        </p>
                    </div>
                </div>

                <div id='Story-image-grid' className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
                    <div id='Our-Story' className='w-auto bg-white/70 backdrop-blur rounded-[2rem] p-8 sm:p-12 shadow-md'>
                        <h3 className='text-3xl text-[#5B4D3F] mb-6'>Our Story</h3>
                        <div className='space-y-4 text-[#6B5D50] leading-relaxed'>
                            <p>
                                What started as conversations between friends has grown into a vibrant community of young
                                women seeking to live out their faith together. We saw a need for authentic, Christ-centered
                                relationships and decided to create a space where those connections could flourish.
                            </p>
                            <p>
                                At Liberty University, it's easy to feel lost in the crowd. Abounding Ministry was born from
                                the desire to ensure that every young women has a place where she can be known, encouraged, 
                                and challenged to grow in her walk with Christ.
                            </p>
                            <p>
                                Today, we gather monthly for Girls Night, serve our community together, and support one
                                another through the joys and challenges of college life-all while keeping Jesus at the center 
                                of everything we do.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img
                            src='images/abounding-2.png'
                            alt='group of girls laughing together'
                            className='w-full h-100 object-cover rounded-[2rem] shadow-lg'
                        />
                    </div>
                </div>

                {/* What We Believe Section */}
                <div className='mb-16'>
                    <h3 className='text-3xl text-[#5B4D3F] mb-8 text-center'>What We Believe</h3>
                    
                    <div id='grid-container' className='grid md:grid-cols-3 gap-8'>
                        <div id='community-container' className='bg-[#DFB8A8]/30 rounded-[2rem] p-8 text-center shadow-sm hover:shadow-md transition-shadow'>
                            <div id='heart-container' className='inline-flex items-center justify-center w-14 h-14 bg-white/50 rounded-full mb-4'>
                                <Heart size={28} className='text-[#C98B7B]'/>
                            </div>
                                <h4 className='text-xl text-[#5B4D3F] mb-3'>Authentic Community</h4>
                                <p className='text-[#6B5D50]'>We believe in creating safe spaces where women can be themselves,
                                    share their struggles, and celebrate their victories together.
                                </p>
                        </div>

                        <div id='discipleship-container' className='bg-[#DFB8A8]/30 rounded-[2rem] p-8 text-center shadow-sm hover:shadow-md transition-shadow'>
                            <div id='user-container' className='inline-flex items-center justify-center w-14 h-14 bg-white/50 rounded-full mb-4'>
                                <Users size={28} className='text-[#9D7B6B]'/>
                                </div>
                                <h4 className='text-xl text-[#5B4D3F] mb-3'>Intentional Discipleship</h4>
                                <p className='text-[#6B5D50]'>We're committed to helping each women grow deeper in her relationship
                                    with Christ through prayer, Scripture, and meaningful conversation.
                                </p>
                        </div>

                        <div id='Service-container' className='bg-[#DFB8A8]/30 rounded-[2rem] p-8 text-center shadow-sm hover:shadow-md transition-shadow'>
                            <div id='sparkle-container' className='inline-flex items-center justify-center w-14 h-14 bg-white/50 rounded-full mb-4'>
                                <Sparkles size={28} className='text-[#8B9EA5]'/>
                                </div>
                                <h4 className='text-xl text-[#5B4D3F] mb-3'>Joyful Service</h4>
                                <p className='text-[#6B5D50]'
                                    >We find joy in serving others and believe that living out our faith means
                                    loving our neighbors in practical, tangible, ways.
                                </p>
                        </div>
                    </div>
                </div>

                {/* Leadership Team Section */}
                <div>
                    <h3 className='text-3xl text-[#5B4D3F] mb-8 text-center'>Leadership Team</h3>
                    <div className = 'grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {[
                            { name: 'Alexis Sommerville', role: 'Founder & Team Member', image: 'images/Alexis.png'},
                            { name: 'Ella', role: 'Team Member', image: ''},
                            { name: 'Lizzy', role: 'Team Member', image: 'images/Lizzy.png'},
                            { name: 'Eunice', role: 'Team Member', image: 'images/eunice-10.png'}
                        ].map((leader, index) => (
                            <div key={index} className='bg-white/70 backdrop-blur rounded-[2rem] overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className='w-full h-64 object-cover'
                                />
                                <div className='p-6 text-center'>
                                    <h4 className='text-xl text-[#5B4D3F] mb-1'>{leader.name}</h4>
                                    <p className='text-sm text-[#9D7B6B]'>{leader.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                    
            </div>

        </section>
    );
};