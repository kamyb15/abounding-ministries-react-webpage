import { Calendar, Coffee, Users, Home } from 'lucide-react';

export function GirlsNight() {
    const upcomingEvents = [
        {
            date: 'TBD',
            time: '7:00 PM',
            title: 'Coffee & Conversation',
            description: 'Join us for an evening of meaningful conversations over coffee and dessert.',
            location: 'Starbucks in Montview.'
        },
        {
            date: 'April 12, 2026',
            time: '6:30 PM',
            title: 'Game Night!',
            description: 'Fun games, laughter, and a time of fellowship and encouragement.',
            location: 'Campus Lawn.'
        },
        {
            date: 'May 3, 2026',
            time: '7:00 PM',
            title: 'Worship & Fellowship Night',
            description: 'An evening of worship, testimonies, and reflecting on what God has been doing in each of our lives.',
            location: 'Vines Center.'
        }
    ];
    return (
        <section id='girls-night' className='py-20 sm:py-32 bg-[#E8DDD3]'>
            <div id='girls-night-container' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/*Section Header*/}
                <div id='header-container' className='text-center mb-16'>
                    <h2 className='text-4xl sm:text-5xl text-[#5B4D3F] mb-4'>Girls Night</h2>
                    <div className='w-16 h-0.5 bg-[#A89B84] mx-auto mb-8'></div>
                    <p className='max-w-3xl mx-auto text-lg text-[#6B5D50] leading-relaxed'>
                        Girls Night is a monthly gathering designed to bring young women together for fun, fellowship, and faith.
                        Each month features intentional activities focused on building community, sharing encouragement, and going 
                        deeper together as we pursue Christ.
                    </p>
                    <p className='max-w-3xl mx-auto text-lg text-[#6B5D50] mt-6 leading-relaxed'>
                        More than just a night out, Girls Night is a space to slow down, connect with other women, and
                        be reminded that you are not alone in your walk with Jesus. Whether through laughter, prayer, or 
                        hearfelt conversation, every moment is centered on growing in authentic community and finding 
                        joy in following Christ together.
                    </p>
                </div>

                {/* Upcoming Events */}
                <div className='mb-16'>
                    <h3 className='text-3xl text-[#5B4D3F] mb-8 flex items-center justify-center gap-3'>
                        <Calendar className='text-[#9D7B6B]' size={32}/>
                        Upcoming Events
                    </h3>
                    <div className='grid md:grid-cols-3 gap-8'>
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className='bg-white/70 backdrop-blur rounded-[2rem] p-8 hover:shadow-lg transition-shadow'>
                                <div className='inline-flex items-center space-x-2 bg-[#DFB8A8]/30 px-4 py-2 rounded-full mb-4'>
                                    <Coffee size={16} className='text-[#C98B7B]'/>
                                    <span className='text-sm text-[#7A6B5D]'>{event.date}</span>
                                </div>
                                <h4 className='text-xl text-[#5B4D3F] mb-2'>{event.title}</h4>
                                <p className='text-[#6B5D50] mb-4'>{event.description}</p>
                                <div className='flex items-start gap-2 text-sm text-[#7A6B5D]'>
                                    <Calendar size={16} className='mt-0.5 text-[#9D7B6B]'/>
                                    <div>
                                        <p>{event.time}</p>
                                        <p>{event.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Two Column Section */}
                <div className='grid lg:grid-cols-2 gap-8 mb-16'>

                    {/* First Column - Serving Opportunities */}
                    <div className='bg-[#A89B8E]/40 rounded-[2rem] p-8 sm:p-10 shadow-md'>
                        <div className='inline-flex items-center justify-center w-12 h-12 bg-white/50 rounded-full mb-6'>
                            <Users size={24} className='text-[#6B5D50]'/>
                        </div>
                        <h3 className='text-2xl text-[#5B4D3F] mb-4'>Serving Opportunities</h3>
                        <p className='text-[#6B5D50] mb-6 leading-relaxed'>
                            Want to make a difference? Join us in serving our community! From volunteering at local shelters
                            to organizing care packages, there are many ways to live out our faith through service.
                        </p>
                        <button className='px-6 py-3 bg-[#9D7B6B] text-white rounded-full hover:bg-[#8D6B5B] transition-colors shadow-sm'>
                            View Opportunities
                        </button>
                    </div>

                    {/*Second Column - Host a Girls Night*/}
                    <div className='bg-[#DFB8A8]/40 rounded-[2rem] p-8 sm:p-10 shadow-md'>
                        <div className='inline-flex items-center justify-center w-12 h-12 bg-white/50 rounded-full mb-6'>
                            <Home size={24} className='text-[#6B5D50]'/>
                        </div>
                        <h3 className='text-2xl text-[#5B4D3F] mb-4'>
                            Host a Girls Night!
                        </h3>
                        <p className='text-[#6B5D50] mb-6 leading-relaxed'>
                            Interested in hosting an event near you? We'd love to help you create a gathering space 
                            for young women in your area. Fill out the form and we'll be in touch!
                        </p>
                        <button className='px-6 py-3 bg-[#C98B7B] text-white rounded-full hover:bg-[#8D6B5B] transition-colors shadow-sm'>
                            Host an Event
                        </button>
                    </div>
                </div>

                {/* Image Gallery */}
                <div className='grid sm:grid-cols-2 gap-6'>
                    <img
                    src='images/abounding-gallery-2.png'
                    alt='girls with tote bags'
                    className='w-full h-[500px] object-cover rounded-[2rem] shadow-md'
                    />
                    <img
                    src='images/abounding-gallery-1.png'
                    alt='girls making bouqets'
                    className='w-full h-[500px] object-cover rounded-[2rem] shadow-md'
                    />

                </div>
            </div>
        </section>
    );
}