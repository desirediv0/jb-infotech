'use client';
import { FiHeart, FiUsers, FiCheckCircle, FiPercent } from 'react-icons/fi';

const StatsSection = () => {
    const stats = [
        { number: "118", label: "Happy Clients", icon: FiHeart },
        { number: "13", label: "Hard Workers", icon: FiUsers },
        { number: "98%", label: "Project Success", icon: FiCheckCircle },
        { number: "48", label: "Total Projects", icon: FiPercent }
    ];
    return (
        <div>
            {/* Stats Section */}
            <div className="bg-[#155DFC] rounded-lg py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white max-w-7xl mx-auto ">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div key={index} className="space-y-3 bg-white/10 p-4 rounded">
                                <div className="flex justify-center">
                                    <IconComponent className="text-3xl" />
                                </div>
                                <div className="text-4xl font-bold">{stat.number}</div>
                                <div className="text-blue-100 text-sm lg:text-base">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default StatsSection
