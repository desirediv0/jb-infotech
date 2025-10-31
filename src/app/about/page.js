import ReusableHero from '../../components/ReusableHero';
import { InfiniteSlider } from '../../components/ui/infinite-slider';
import ClientsCarousel from '../../components/ClientsCarousel';
import Image from 'next/image';
import CallToAction from '@/components/CallToAction';

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            <ReusableHero
                title="About Us"
                description="JP IFNOTECH Technology is an IT Infrastructure system integration company providing services to design, plan, implement, manage and review IT networks."
                buttonText="Check Out Our Services"
                buttonLink="/services"
                imageSrc="/about.jpg"
                backgroundColor="bg-gradient-to-r from-blue-100 to-purple-100"
            />

            {/* Content Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-base text-gray-600 leading-relaxed mb-8">
                            To introduce JP IFNOTECH Technology is the IT Infrastructure System Integration Company. We provide services to Design, Plan, Implement, Manage and Review IT Networks.
                        </p>

                        <p className="text-base text-gray-600 leading-relaxed mb-8">
                            JP IFNOTECH Technology has been providing professional IT Support and managed IT Consultancy for businesses. We strive to give our clients Enterprise-level services and solutions at prices that work for businesses. Time and experience have helped us develop best practices and workflow procedures around a proactive philosophy designed to keep your focus on your business, not your technology. Our team of experts can become your outsourced IT department; responding to issues quickly, often before you even know about them. Covering everything from your servers and network infrastructure, to your computers, workstations, we provide end-to-end solutions for all of your technology needs.
                        </p>

                        <p className="text-base text-gray-600 leading-relaxed mb-16">
                            The state-of-the-art infrastructure selected is both scalable and flexible providing for small to corporate sized enterprises. It has a distinct location advantage; being midway between the national capital, Delhi. We bring to the world a whole new class of services and a unique approach to customer satisfaction. We serve to the world and an extensive portfolio of services in the most professional manner and also adhering to the industry standards. We share our knowledge of offshore development, our deep project management experience, processes and methodology and wide network of personnel sources to ensure an outsourcing strategy that works for our clients. With strong plans of investing in people and technology, our strategy revolves around an inexorable commitment to provide superior services using world-class technology. The aim is to build a culture, based on our values of integrity and trust; supported by action with results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Proud Partners Section */}
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
            <CallToAction />
        </div>
    );
}