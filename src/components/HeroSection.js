const HeroSection = () => {
    return (
        <section className="bg-gradient-to-br from-blue-100 to-indigo-100 min-h-[60vh] flex items-center">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Complete IT Solutions
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Benefits of working with us is you get all the required products and
                            services under a single umbrella.
                        </p>
                        <button className="bg-[#160740] text-white px-8 py-3 rounded-lg hover:bg-[#160740] transition-colors font-semibold">
                            Contact Us
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-[#160740] rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-600">Professional IT Team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;