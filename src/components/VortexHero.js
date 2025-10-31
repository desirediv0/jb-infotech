'use client';
import React, { useState, useEffect } from "react";
import { Vortex } from "./ui/vortex";
import { motion, AnimatePresence } from "framer-motion";

export function VortexHero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Our Mission",
            description: "To deliver smart, affordable, and scalable IT integration solutions that simplify technology and empower people."
        },
        {
            title: "Our Vision",
            description: "JP Infotech strives to be your trusted partner in technology. With a focus on delivering quality products, we offer the latest laptops, accessories, and network devices, always ensuring reliability, performance, and customer satisfaction."
        },
        {
            title: "Our Commitment",
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
                        className="flex flex-col items-center justify-center text-center max-w-4xl"
                    >
                        <h2 className="text-white text-3xl md:text-6xl font-bold text-center mb-6">
                            {slides[currentSlide].title}
                        </h2>
                        <p className="text-white text-base md:text-2xl max-w-3xl leading-relaxed">
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
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? "bg-white w-8"
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
