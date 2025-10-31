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
        <div className="w-full mx-auto h-screen overflow-hidden">
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="flex flex-col items-center justify-center text-center max-w-7xl mx-auto"
                    >

                        <p className="text-white text-2xl md:text-4xl max-w-7xl leading-relaxed">
                            {slides[currentSlide].description}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="flex gap-3 mt-12">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                ? "bg-white w-6"
                                : "bg-white/40 hover:bg-white/60"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </Vortex>
        </div>
    );
}
