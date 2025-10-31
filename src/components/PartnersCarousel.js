'use client';
import { useState, useEffect } from 'react';

const PartnersCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const partners = [
        { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/200px-Microsoft_logo_%282012%29.svg.png' },
        { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/200px-Cisco_logo_blue_2016.svg.png' },
        { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/200px-Dell_Logo.svg.png' },
        { name: 'D-Link', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/D-Link_logo.svg/200px-D-Link_logo.svg.png' },
        { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/200px-HP_logo_2012.svg.png' },
        { name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/200px-Lenovo_logo_2015.svg.png' },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === partners.length - 3 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? partners.length - 3 : prevIndex - 1
        );
    };

    // Auto-scroll every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
                {partners.map((partner, index) => (
                    <div key={index} className="w-1/3 flex-shrink-0 px-4">
                        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center h-32">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-16 max-w-32 object-contain mb-2"
                            />
                            <p className="text-gray-700 font-medium text-center">{partner.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10"
                aria-label="Previous partners"
            >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10"
                aria-label="Next partners"
            >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default PartnersCarousel;