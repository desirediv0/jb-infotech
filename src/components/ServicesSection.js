import { FiShield, FiMonitor, FiServer, FiDatabase, FiEdit3, FiGitBranch } from 'react-icons/fi';

const ServicesSection = () => {
    const services = [
        {
            icon: FiShield,
            title: "Security",
            description: "Comprehensive security solutions for your business"
        },
        {
            icon: FiMonitor,
            title: "Microsoft Solutions",
            description: "Full suite of Microsoft services and solutions"
        },
        {
            icon: FiServer,
            title: "System Integration",
            description: "Seamless integration of all IT components"
        },
        {
            icon: FiDatabase,
            title: "Infrastructure Consult",
            description: "Expert infrastructure consulting services"
        },
        {
            icon: FiEdit3,
            title: "Turnkey Projects",
            description: "End-to-end project implementation"
        },
        {
            icon: FiGitBranch,
            title: "Active/Passive Networking",
            description: "Complete networking solutions"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl  font-bold text-gray-900 mb-4">
                        Services We Provide
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="flex flex-col items-start">
                                    <div className="mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                        <Icon size={48} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-left">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;