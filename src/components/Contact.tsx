import { useState } from "react";
import { Mail, Phone, Send, Instagram, Heart } from 'lucide-react';

export function Contact() {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            number: '',
            message: ''
        });

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            alert('Thank you for reaching out! We will get back to you soon.');
            setFormData({name: '', email: '', number: '', message: '',});
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <section id='contact' className='py-20 sm:py-32 bg-linear-to-br from-[#E8DDD3] to-[#D4C5B9]'>
                <div id='contact-container' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                    {/* Section Header */}
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl sm:text-5xl text-[#5B4D3F] mb-4'>Get In Touch</h2>
                        <div className='w-16 h-0.5 bg-[#DFB8A8] mx-auto mb-6'></div>
                        <p className='text-lg text-[#6B5D50] max-w-2xl mx-auto'>
                            We'd love to hear from you! Whether you have questions, want to get involved, or just want 
                            to say hi, feel free to reach out.
                        </p>
                    </div>
                    
                    {/* Contact Form and Info */}
                    <div className='grid lg:grid-cols-2 gap-12'>

                        {/* Form */}
                        <div className='bg-white/70 backdrop-blur rounded-[2rem] p-8 sm:p-10 shadow-md'>
                            <h3 className='text-2xl text-[#5B4D3F] mb-6'>Send us a Message</h3>
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div>
                                    <label htmlFor='name' className='block text-sm text-[#6B5D50] mb-2'>
                                        Name
                                    </label>
                                    <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 bg-white/80 border border-[#DFB8A8]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#DFB8A8]/50 focus:border-transparent transition-all'
                                    placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor='email' className='block text-sm text-[#6B5D50] mb-2'>
                                        Email
                                    </label>
                                    <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 bg-white/80 border border-[#DFB8A8]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#DFB8A8]/50 focus:border-transparent transition-all'
                                    placeholder='Your email'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='number' className='block text-sm text-[#6B5D50] mb-2'>
                                        Phone Number
                                    </label>
                                    <input
                                    type='tel'
                                    id='number'
                                    name='number'
                                    value={formData.number}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 bg-white/80 border border-[#DFB8A8]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#DFB8A8]/50 focus:border-transparent transition-all'
                                    placeholder='Your phone number'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='message' className='block text-sm text-[#6B5D50] mb-2'>
                                        Message
                                    </label>
                                    <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 bg-white/80 border border-[#DFB8A8]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#DFB8A8]/50 focus:border-transparent transition-all'
                                    rows={5}
                                    placeholder='Tell us how we can help...'
                                    />
                                </div>
                                <button
                                type='submit'
                                className='w-full px-6 py-3.5 bg-[#DFB8A8] text-white rounded-full hover:bg-[#D4A898] transition-colors flex items-center justify-center gap-2 shadow-md'
                                >
                                    Send Message 
                                    <Send size={18}/>
                                </button>
                            </form>
                        </div>


                {/* Contact Info */}
                <div className='space-y-8'>

                    {/* Social Media, Email, and Phone */}
                    <div className='bg-white/70 backdrop-blur rounded-[2rem] p-8 sm:p-10 shadow-md'>
                        <h3 className='text-2xl text-[#5B4D3F] mb-6'>Connect With Us</h3>
                        <div className='space-y-6'>
                            <a
                            href="https://instagram.com/girlsnightlyh"
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-4 p-4 bg-[#F5EBE0] rounded-2xl hover:shadow-sm transition-shadow group'
                            >
                                <div className='flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl'>
                                <Instagram size={24} className='text-white'/>
                                </div>
                                <div>
                                    <p className='text-[#5B4D3F] group-hover:text-[#9D7B6B] transition-colors'>Follow us on Instagram</p>
                                    <p className='text-sm text-[#7A6B5D]'>@girlsnightlyh</p>
                                </div>
                            </a>

                            <div className='flex items-center gap-4 p-4 bg-[#F5EBE0] rounded-2xl'>
                                <div className='flex items-center justify-center w-12 h-12 bg-[#B8C5C9] rounded-2xl'>
                                    <Mail size={24} className='text-white'/>
                                </div>
                                <div>
                                    <p className='text-[#5B4D3F]'>Email us</p>
                                    <p className='text-sm text-[#7A6B5D]'>aboundingministry@gmail.com</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4 p-4 bg-[#F5EBE0] rounded-2xl'>
                                <div className='flex items-center justify-center w-12 h-12 bg-[#DFB8A8] rounded-2xl'>
                                    <Phone size={24} className="text-white"/>
                                </div>
                                <div>
                                    <p className='text-[#5B4D3F]'>Call or Text</p>
                                    <p className='text-sm text-[#7A6B5D]'>(434) 555-0123</p>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Image */}
                <div className='rounded-4xl overflow-hidden shadow-lg'>
                    <img
                    src='images/GatheringBags.png'
                    alt='GirlsNight Painting Bags'
                    className='w-full h-75 object-cover'
                    />
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className='mt-20 pt-8 border-t border-[#9D7B6B]/20 text-center'>
            <div className='flex items-center justify-center gap-2 mb-4'>
                <div className= 'w-10 h-10 bg-[#DFB8A8]] rounded-full flex items-center justify-center'>
                    <Heart size={20} className='text-white' fill='white'/>
                </div>
                <span className='text-lg text-[#5B4D3F]'>Abounding Ministry</span>
            </div>
            <p className='text-[#7A6B5D] text-sm mb-2'>
                Liberty University • Lynchburg, VA
            </p>
            <p className='text-[#9D7B6B]/60 text-xs'>
                © 2026 Abounding Ministry. All rights reserved.
            </p>
        </div>
    </div>
</section>
);
}