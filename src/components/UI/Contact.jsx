import React from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const { register, reset, handleSubmit } = useForm();

    const accessKey = "9425d211-c05a-49d5-a02b-dd6360a1069b"; // Replace with your Web3Forms API key

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
            from_name: "Rayappu Thanusiyan",
            subject: "New Contact Message from your Website",
        },
        onSuccess: (msg) => {
            reset();
            toast.success('Message sent successfully!', {
                position: 'top-right',
                autoClose: 5000,
            });
        },
        onError: (msg) => {
            toast.error('Failed to send message. Please try again.', {
                position: 'top-right',
                autoClose: 5000,
            });
        },
    });

    return (
        <section id="contact" className="pt-12 pb-12 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-headingcolor font-bold text-3xl mb-8">
                    Get in Touch
                </h2>
                <div className="md:flex justify-between items-center gap-8">
                    {/* Google Map */}
                    <div className="w-full md:w-1/2">
                        <iframe
                            title="google-maps"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1797.1677319899522!2d79.92156908540166!3d9.743653447200742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2slk!4v1733540491903!5m2!1sen!2slk"
                            className="w-full h-[350px] rounded-lg shadow-lg"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full mt-6 md:mt-0 md:w-1/2 bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-gray-700 font-medium text-lg mb-4">
                            Let’s Connect
                        </h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-xs font-medium text-gray-600 mb-1"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    {...register("name", { required: true })}
                                    className="w-full p-3 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-primaryColor focus:outline-none"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-xs font-medium text-gray-600 mb-1"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    {...register("email", { required: true })}
                                    className="w-full p-3 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-primaryColor focus:outline-none"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-xs font-medium text-gray-600 mb-1"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    placeholder="Enter your message"
                                    {...register("message", { required: true })}
                                    className="w-full p-3 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-primaryColor focus:outline-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-2 bg-primaryColor text-sm text-white rounded-md font-medium hover:bg-primaryDark transition ease-in-out duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Toast Notification Container */}
            <ToastContainer />
        </section>
    );
}

export default Contact;
