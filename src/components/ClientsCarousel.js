'use client';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const ClientsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const clients = [
        { name: 'Avaada', logo: '/avaada.png' },
        { name: 'Cashify', logo: '/cashify.png' },
        { name: 'ExtraMarks', logo: '/extra.png' },
        { name: "Cars24", logo: '/cars.png' },
        { name: "Cashify", logo: '/cashify.png' },
        { name: "Central Perk", logo: '/centralpark.png' },
        { name: "Max", logo: '/max.png' },
    ];

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === clients.length - 1 ? 0 : prevIndex + 1
        );
    }, [clients.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? clients.length - 1 : prevIndex - 1
        );
    };

    // Auto-scroll every 4 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
                {clients.map((client, index) => (
                    <div key={index} className="w-1/4 flex-shrink-0 px-4">
                        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center h-48 transform hover:scale-105 transition-transform duration-300">
                            <Image
                                src={client.logo}
                                alt={client.name}
                                width={150}
                                height={80}
                                className="mb-4"
                            />
                            <p className="text-gray-700 font-medium text-center">{client.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10"
                aria-label="Previous clients"
            >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10"
                aria-label="Next clients"
            >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default ClientsCarousel;