import Image from 'next/image';
import ReusableHero from '../../components/ReusableHero';
import CallToAction from '@/components/CallToAction';
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
                            <strong>JP INFOTECH</strong> – Empowering Businesses Through Intelligent IT Infrastructure

                        </p>

                        <p>
                            At JP INFOTECH, we understand that in today’s fast-evolving digital landscape, technology is not just an enabler, it’s a critical
                            foundation for business success. That’s why we are committed to delivering <strong>
                                end-to-end IT infrastructure solutions
                            </strong> that
                            empower organizations to operate seamlessly, securely, and efficiently.

                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-5">Who We Are</h2>
                        <p>
                            Backed by almost a decade of industry experience, <strong>JP INFOTECH</strong> has been delivering <strong>professional IT support and managed
                                technology consultancy</strong> to a diverse portfolio of clients. Our approach combines <strong>enterprise-grade expertise</strong> with costeffective solutions, ensuring that our clients receive maximum value and performance from their IT investments.
                            Over time, we have developed <strong>robust best practices and proactive workflows </strong> designed to minimize downtime, enhance
                            system reliability, and keep our clients focused on what matters most - <strong>Growing their business</strong>.

                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-5">Our Expertise
                        </h2>
                        <p>Our team of <strong>seasoned IT professionals</strong> acts as your <strong>dedicated, outsourced IT department,</strong> ensuring that your systems
                            operate with optimal efficiency. From <strong>network design and server management</strong> to <strong>hardware support and security</strong>, we deliver
                            <strong>comprehensive, integrated solutions</strong> that cover every facet of your technology infrastructure.
                            Our infrastructure capabilities are <strong>scalable and flexible</strong>, catering equally to startups, SMEs, and large enterprises. Strategically
                            located near Delhi NCR, our operations centre provides a <strong>geographical advantage</strong> for serving clients across India and beyond.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <h2 className="text-2xl font-semibold text-gray-800 mt-5">What We Offers
                            </h2>
                            <li><strong>Network Design & Implementation</strong> </li>
                            <li><strong> Managed IT Services & Support</strong> </li>
                            <li><strong>System Integration Solutions</strong></li>
                            <li><strong>Server, Storage & Security Solutions</strong> </li>
                            <li><strong>Cloud Infrastructure Consulting</strong> </li>
                            <li><strong>IT Infrastructure Audits & Optimization</strong> </li>
                            <li><strong>AMC & Facility Management Services</strong> </li>
                        </ul>
                        <p>
                            Each solution we provide is <strong>customized, future-ready</strong>, and aligned with the client’s business objectives —
                            ensuring measurable results and long-term value.
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-800 mt-5">Our Philosophy</h2>
                        <p>At JP INFOTECH, we bring to the industry <strong>a fresh, forward-thinking approach to customer satisfaction</strong>. Our
                            philosophy is rooted in <strong>trust, integrity, and performance</strong> — values that define every engagement we undertake.
                            We believe in building partnerships, not transactions, and our commitment to service excellence reflects in every
                            project we deliver</p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-5">Global Outlook, Local Expertise</h2>
                        <p>
                            Our deep understanding of <strong>offshore development, project management methodologies, and process
                                frameworks</strong> allows us to deliver high-quality outsourcing strategies that truly work for our clients. With continued
                            investments in <strong>people and technology</strong>, our mission is to create a culture where <strong>innovation meets reliability</strong>, and
                            where <strong>results speak louder than promises</strong>.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-5">Strategic Alliances
                        </h2>

                        <p className="mt-5">
                            JP INFOTECH maintains <strong>strong alliances with reputed OEMs and service providers</strong>, ensuring that every solution
                            we offer is built on <strong>trusted, world-class technologies</strong>. These partnerships empower us to deliver <strong> cutting-edge
                                products, seamless integration, and unmatched service quality</strong> to our valued clients.
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-800 mt-5">Our Commitment

                        </h2>

                        <p className="mt-5">
                            Our goal is simple — to be the <strong>single point of contact</strong> for all your IT infrastructure needs.
                            We aspire to build long-term relationships based on <strong>excellence, transparency, and trust</strong> — driving growth for our
                            clients and shaping the future of technology-driven enterprises.
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
            <CallToAction />
        </div>
    );
}
