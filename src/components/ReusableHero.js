'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ReusableHero = ({
    title,
    subtitle,
    description,
    buttonText = "Contact Us",
    buttonLink = "/contact",
    imageSrc = "/api/placeholder/600/400",
    backgroundColor = "bg-blue-50",
    showbtn = true,
}) => {
    return (
        <section className={`${backgroundColor} py-16 px-6`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content - Slide in from left */}
                    <motion.div
                        className="lg:w-1/2 space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {subtitle && (
                            <motion.p
                                className="text-[#160740] font-medium text-sm uppercase tracking-wider"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {subtitle}
                            </motion.p>
                        )}

                        <motion.h1
                            className="text-4xl  font-bold text-gray-900 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            className="text-gray-600 text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {description}
                        </motion.p>

                        {
                            showbtn && (<motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <Link
                                    href={buttonLink}
                                    className="inline-block bg-[#160740] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#160740] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    {buttonText}
                                </Link>
                            </motion.div>)
                        }
                    </motion.div>

                    {/* Right Image - Slide in from right */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <motion.div
                            className="relative overflow-hidden rounded-xl shadow-2xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={imageSrc}
                                alt={title}
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay gradient for better text readability if needed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ReusableHero;