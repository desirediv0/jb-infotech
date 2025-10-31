'use client';
import React, { useState, useEffect } from "react";
import { Vortex } from "./ui/vortex";
import { motion, AnimatePresence } from "framer-motion";

export function VortexHero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {

            description: "To deliver smart, affordable, and scalable IT integration solutions that simplify technology and empower people."
        },
        {
            description: "JP Infotech strives to be your trusted partner in technology. With a focus on delivering quality products, we offer the latest laptops, accessories, and network devices, always ensuring reliability, performance, and customer satisfaction."
        },
        {

            description: "We constantly strive to innovate, adapt, and improve, ensuring that our products and services remain at the cutting edge of the tech industry."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="w-full mx-auto h-[80vh] overflow-hidden">
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                className="w-full h-full flex items-center justify-center"

            >
                <div className="flex items-center flex-col justify-center py-8 px-6 w-full max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.95 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="flex flex-col items-center justify-center text-center"
                        >
                            <div className="relative backdrop-blur-md bg-white/90 rounded shadow-2xl p-8 md:p-12 border border-white/20">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded opacity-20 blur-xl"></div>
                                <h1 className="relative text-gray-900 text-xl md:text-3xl lg:text-4xl font-bold max-w-5xl leading-relaxed tracking-tight">
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent capitalize">
                                        {slides[currentSlide].description}
                                    </span>
                                </h1>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Slide Indicators */}
                    <div className="flex gap-3 mt-8">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 rounded-full transition-all duration-500 ${index === currentSlide
                                    ? "bg-gradient-to-r from-blue-500 to-purple-500 w-12 shadow-lg"
                                    : "bg-white/50 w-2 hover:bg-white/80 hover:w-8"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </Vortex>
        </div>
    );
}
