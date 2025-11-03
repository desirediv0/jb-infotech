import Image from 'next/image';
import ReusableHero from '../../components/ReusableHero';
import CallToAction from '@/components/CallToAction';
import ClientsCarousel from '@/components/ClientsCarousel';
import { InfiniteSlider } from '@/components/ui/infinite-slider';

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            <ReusableHero
                title="About Us"
                description="Welcome to JP INFOTECH — empowering businesses through smart IT system integration. We combine technology, creativity, and innovation to make your operations smoother, faster, and more connected."
                buttonText="Explore Our Services"
                buttonLink="/services"
                imageSrc="/about.jpg"
                backgroundColor="bg-gradient-to-r from-purple-100 to-[#cbb8fb]"
            />

            {/* Content Section */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-6xl mx-auto space-y-8 text-gray-700 leading-relaxed">

                        <p>
                            Welcome to <strong>JP INFOTECH</strong>, a passionate team dedicated to helping businesses grow through smart IT system integration. We bring together technology, creativity, and innovation to build solutions that make your operations smoother, faster, and more connected.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-5">Who We Are</h2>
                        <p>
                            We’re a team of tech enthusiasts and problem-solvers who believe that technology should make work simpler—not harder. Our mission is to help organizations of all sizes bridge the gap between traditional systems and modern technology.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-5">What We Do</h2>
                        <p>We specialize in integrating IT systems and services that help businesses perform better. Our key offerings include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>System & Network Integration</strong> – Connecting your systems for smooth, secure operation.</li>
                            <li><strong>Cloud & Infrastructure Solutions</strong> – Scalable setups that grow with your business.</li>
                            <li><strong>Software & Application Integration</strong> – Making different tools and platforms work together seamlessly.</li>
                            <li><strong>IT Support & Maintenance</strong> – Reliable assistance to keep your systems running 24/7.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-5">Our Vision</h2>
                        <p>
                            To become a trusted technology partner for businesses that want to innovate, scale, and succeed in the digital era.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-5">Our Mission</h2>
                        <p>
                            To deliver smart, affordable, and scalable IT integration solutions that simplify technology and empower people.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-5">Why Choose Us</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Startup Agility:</strong> We move fast and adapt to your needs.</li>
                            <li><strong>Tailored Solutions:</strong> Every project is designed specifically for your goals.</li>
                            <li><strong>Personal Support:</strong> You work directly with our dedicated team.</li>
                            <li><strong>Passion for Innovation:</strong> We love what we do—and it shows in our results.</li>
                        </ul>

                        <p className="mt-5">
                            At <strong>JP INFOTECH</strong>, we’re not just integrating systems — we’re helping build the digital backbone of your business.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Proud Partners</h2>
                    <InfiniteSlider gap={80} reverse>
                        <div className="flex flex-col items-center justify-center gap-4 min-w-[180px]">
                            <Image
                                width={100}
                                height={100}
                                src="/microsoft.png"
                                alt="Microsoft logo"
                                className="max-h-[50px] w-auto object-contain  transition-all duration-300"
                            />
                            <p className="text-center text-gray-600">Microsoft</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 min-w-[180px]">
                            <Image
                                width={100}
                                height={100}
                                src="/cisco.svg"
                                alt="Cisco logo"
                                className="max-h-[50px] w-auto object-contain  transition-all duration-300"
                            />
                            <p className="text-center text-gray-600">Cisco</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 min-w-[180px]">
                            <Image
                                width={100}
                                height={100}
                                src="/commvault.png"
                                alt="Commvault logo"
                                className="max-h-[50px] w-auto object-contain  transition-all duration-300"
                            />
                            <p className="text-center text-gray-600">Commvault</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 min-w-[180px]">
                            <Image
                                width={100}
                                height={100}
                                src="/dell.svg"
                                alt="Dell logo"
                                className="max-h-[50px] w-auto object-contain  transition-all duration-300"
                            />
                            <p className="text-center text-gray-600">Dell</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 min-w-[180px]">
                            <Image
                                width={100}
                                height={100}
                                src="/dLink.svg"
                                alt="DLink logo"
                                className="max-h-[50px] w-auto object-contain  transition-all duration-300"
                            />
                            <p className="text-center text-gray-600">DLink</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 min-w-[180px]">
                            <Image
                                width={100}
                                height={100}
                                src="/forcepoint.svg"
                                alt="forcepoint logo"
                                className="max-h-[50px] w-auto object-contain  transition-all duration-300"
                            />
                            <p className="text-center text-gray-600">Forcepoint</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 min-w-[180px]">
                            <Image
                                width={100}
                                height={100}
                                src="/hp.svg"
                                alt="HP logo"
                                className="max-h-[50px] w-auto object-contain  transition-all duration-300"
                            />
                            <p className="text-center text-gray-600">HP</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 min-w-[180px]">
                            <Image
                                width={100}
                                height={100}
                                src="/kaspersky.svg"
                                alt="Kaspersky logo"
                                className="max-h-[50px] w-auto object-contain  transition-all duration-300"
                            />
                            <p className="text-center text-gray-600">
                                Kaspersky
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 min-w-[180px]">
                            <Image
                                width={100}
                                height={100}
                                src="/lenovo.svg"
                                alt="lenovo logo"
                                className="max-h-[50px] w-auto object-contain  transition-all duration-300"
                            />
                            <p className="text-center text-gray-600">
                                Lenovo
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 min-w-[180px]">
                            <Image
                                width={100}
                                height={100}
                                src="/seqrite.svg"
                                alt="seqrite logo"
                                className="max-h-[50px] w-auto object-contain  transition-all duration-300"
                            />
                            <p className="text-center text-gray-600">
                                Seqrite
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 min-w-[180px]">
                            <Image
                                width={100}
                                height={100}
                                src="/trendMicro.png"
                                alt="trendMicro logo"
                                className="max-h-[50px] w-auto object-contain  transition-all duration-300"
                            />
                            <p className="text-center text-gray-600">
                                TrendMicro
                            </p>
                        </div>

                    </InfiniteSlider>
                </div>
            </section>

            {/* Our Precious Clients Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Precious Clients</h2>
                    <ClientsCarousel />
                </div>
            </section>

            {/* Call to Action Section */}
            <CallToAction />
        </div>
    );
}
