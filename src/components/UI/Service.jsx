import React from 'react'
import uiImg from '../../assets/images/design.png'
import webImg from '../../assets/images/front-end.png'
import backEnd from '../../assets/images/backend.png'
import grphicImg from '../../assets/images/front-end.png'

function Service() {
    return (
        <section id='services'>
            <div className='container lg:pt-5'>
                <div className='text-center'>
                    <h2 className='text-headingcolor font-[800] text-[2.4rem] pt-5 mb-5'>What do I help</h2>

                    <p className='lg:max-w-[600px] lg:mx-auto text-headingcolor font-[500] text-[16px] leading-7'>
                        I provide a range of services to create great digital experiences. I design user-friendly and attractive interfaces as a UI/UX Designer, using tools like wireframes and prototypes. I also develop responsive and scalable websites with HTML, CSS, JavaScript, React.js, and Tailwind CSS. For the backend, I build secure and reliable systems using Python (Django), PHP, and MySQL. Additionally, I create eye-catching visuals with Figma, Photoshop, and Illustrator to bring ideas to life.
                    </p>
                </div>

                <div className='flex flex-col justify-center sm:py-12'>
                    <div className='w-full py-3 px-2 sm:max-auto sm:px-0'>
                        <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                            {/* ======= Vertical line running the middle */}
                            <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform'>
                            </div>


                            {/*======== left card ========== */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                                                    UI/UX Designer
                                                </h3>

                                                <p className='text-[15px text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                    I design user-friendly and attractive interfaces, focusing on creating the best experience for users.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={uiImg} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* ======== right card ======== */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                                                    Web Development
                                                </h3>

                                                <p className='text-[15px text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                    I build modern, responsive websites using technologies like HTML, CSS, JavaScript, and React.js.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={webImg} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/*======== left card ========== */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                                                    Backend Development
                                                </h3>

                                                <p className='text-[15px text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                    I develop secure and reliable backend systems using Python (Django), PHP, and MySQL.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={backEnd} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* ======== right card ======== */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                                                    Graphic Design
                                                </h3>

                                                <p className='text-[15px text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                    I create creative and professional designs using tools like Figma, Photoshop, and Illustrator.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={grphicImg} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service