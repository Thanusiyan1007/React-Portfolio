import React from 'react';
import heroImg from '../../assets/images/hero.svg';
import CountUp from 'react-countup';

function Hero() {
    return (
        <section className='pt-0' id='about'>
            <div className="container pt-16">
                <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/* Hero Left Content */}
                    <div className='w-full md:basis-1/2'>
                        <h5
                            data-aos='fade-right'
                            data-aos-duration='1500'
                            className='text-headingcolor font-semibold text-lg mb-2'
                        >
                            Hello, Welcome
                        </h5>
                        <h1
                            data-aos='fade-up'
                            data-aos-duration='1500'
                            className='text-headingcolor font-extrabold text-3xl sm:text-4xl leading-tight mt-5'
                        >
                            I am Rayappu Thanusiyan <br /> Software Developer
                        </h1>
                        <div
                            data-aos='fade-up'
                            data-aos-duration='1800'
                            data-aos-delay='200'
                            className='flex items-center gap-6 mt-7'
                        >
                            <a href="#contact">
                                <button
                                    className='bg-primaryColor text-white font-medium flex items-center gap-2 hover:bg-smallTextColor transition ease-in duration-300 px-6 py-3 rounded-lg'
                                >
                                    <i className="ri-mail-line"></i> Hire Me
                                </button>
                            </a>
                            <a
                                href="#portfolio"
                                className='text-smallTextColor font-semibold text-base border-b border-smallTextColor hover:text-primaryColor transition ease-in duration-200'
                            >
                                See Portfolio
                            </a>
                        </div>
                        <p
                            data-aos='fade-left'
                            data-aos-duration='1500'
                            className='flex gap-2 text-headingcolor mt-14 font-medium text-base leading-7 sm:px-10'
                        >
                            <span>
                                <i className="ri-apps-line"></i>
                            </span>
                            I am Rayappu Thanusiyan, a skilled UI/UX Designer and Software Engineer with expertise in prototyping, wireframing, web development, and backend technologies like Python (Django) and MySQL. I have worked on projects such as the Commercial Bank Digital User Interface and ThuriSpark (PVT) LTD Webpage, combining design and development to create innovative digital experiences. I hold certifications in UI/UX Design with Figma and Front-End Development.
                        </p>
                        <div className='flex items-center gap-6 mt-10'>
                            <span className='text-smallTextColor text-sm font-semibold'>Follow me:</span>
                            <div className='flex gap-4 text-smallTextColor text-lg'>
                                <a href="https://github.com/Thanusiyan1007"><i className="ri-github-fill hover:text-primaryColor transition duration-200"></i></a>
                                <a href="https://www.behance.net/rayapputhanusiyan"><i className="ri-behance-line hover:text-primaryColor transition duration-200"></i></a>
                                <a href="https://www.linkedin.com/in/rayapputhanusiyan/"><i className="ri-linkedin-fill hover:text-primaryColor transition duration-200"></i></a>
                                <a href="https://dribbble.com/Thanusiyan"><i className="ri-dribbble-line hover:text-primaryColor transition duration-200"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure>
                            <img
                                src={heroImg}
                                alt="Hero"
                                className="rounded-[100px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            />
                        </figure>
                    </div>

                    {/* Hero Stats */}
                    <div className='md:basis-1/5 flex justify-between text-center mt-10 gap-6 md:mt-0 md:flex-col md:justify-end md:text-right'>
                        <div className='mb-8'>
                            <h2 className='text-headingcolor font-bold text-3xl'>
                                <CountUp start={0} end={1} duration={2} suffix='+' />
                            </h2>
                            <h4 className='text-headingcolor font-semibold text-lg'>Experience Year</h4>
                        </div>
                        <div className='mb-8'>
                            <h2 className='text-headingcolor font-bold text-3xl'>
                                <CountUp start={0} end={4} duration={2} suffix='+' />
                            </h2>
                            <h4 className='text-headingcolor font-semibold text-lg'>Software Projects</h4>
                        </div>
                        <div className='mb-8'>
                            <h2 className='text-headingcolor font-bold text-3xl'>
                                <CountUp start={0} end={3} duration={2} suffix='+' />
                            </h2>
                            <h4 className='text-headingcolor font-semibold text-lg'>UI/UX Projects</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
