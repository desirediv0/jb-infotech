'use client';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import ReusableHero from '../../components/ReusableHero';

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50">
            <ReusableHero
                title="Contact Us"
                description="Have questions or need assistance? Our team is ready to help."
                imageSrc="/contact.jpg"
                backgroundColor="bg-gradient-to-br from-blue-100 to-indigo-100"
                showbtn={false}
            />

            {/* Locations Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Locations</h2>

                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {/* Head Office */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Head Office</h3>
                                <p className="text-gray-600 mb-4">
                                    1382, Street No 18, Surat Nagar 2, Gurugram - 122006
                                </p>
                            </div>
                            <div className="h-64 bg-gray-100 flex items-center justify-center">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2894564892703!2d77.04273431506485!3d28.459484982483067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18db1b8b1b1b%3A0x1b1b1b1b1b1b1b1b!2sSurat%20Nagar%202%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1635764556789!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Branch Office */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Branch Office</h3>
                                <p className="text-gray-600 mb-4">
                                    518, 5th Floor, Ansal Tower 38, Nehru Place, New Delhi - 110019
                                </p>
                            </div>
                            <div className="h-64 bg-gray-100 flex items-center justify-center">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6743926967997!2d77.24663031455373!3d28.549127282446678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c16a4b4b4b%3A0x4b4b4b4b4b4b4b4b!2sNehru%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1635764556789!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information and Form */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <FiMapPin className="text-blue-500 text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold text-gray-900">Head Office</h3>
                                </div>
                                <p className="text-gray-600 ml-9">
                                    1382, Street No 18, Surat Nagar 2,<br />
                                    Gurugram - 122006
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <FiMapPin className="text-blue-500 text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold text-gray-900">Branch Office</h3>
                                </div>
                                <p className="text-gray-600 ml-9">
                                    518, 5th Floor, Ansal Tower 38, Nehru Place, New Delhi - 110019
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <FiMail className="text-blue-500 text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                                </div>
                                <p className="text-blue-600 ml-9 hover:underline">
                                    <a href="mailto:sales@servicecom.in">sales@servicecom.in</a>
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <FiPhone className="text-blue-500 text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                                </div>
                                <p className="text-gray-600 ml-9">
                                    <a href="tel:0124-4041352" className="hover:text-blue-600">0124-4041352</a>
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
                            <form className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter your Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                    <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                </div>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        placeholder="Enter your Phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter your Subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div className="relative">
                                    <textarea
                                        placeholder="Write your message"
                                        rows="4"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}