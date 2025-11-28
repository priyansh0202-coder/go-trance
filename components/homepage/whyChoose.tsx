import { TrendingUp, Zap, Shield, Award, Globe, Users } from "lucide-react"

const features = [
    {
        id: 1,
        title: "95% Success Rate",
        description: "Our students have a 95% acceptance rate across top medical universities",
        icon: TrendingUp,
    },
    {
        id: 2,
        title: "Fast-Track Process",
        description: "Get admitted in as little as 3-4 months with our streamlined application process",
        icon: Zap,
    },
    {
        id: 3,
        title: "Guaranteed Support",
        description: "Comprehensive support from application to graduation and beyond",
        icon: Shield,
    },
    {
        id: 4,
        title: "Expert Team",
        description: "Our advisors have 15+ years of experience in medical education abroad",
        icon: Award,
    },
    {
        id: 5,
        title: "Global Network",
        description: "Direct partnerships with 100+ universities across Central Asia",
        icon: Globe,
    },
    {
        id: 6,
        title: "Student Community",
        description: "Join 5000+ successful students who studied abroad through Go Trance",
        icon: Users,
    },
]

export function WhyChooseSection() {
    return (
        <section className="bg-gray-100 py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Choose <span className="text-teal-600">Go Trance?</span>
                    </h2>
                    <p className="text-gray-600 text-lg">We are committed to making your MBBS dream a reality</p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature) => {
                        const IconComponent = feature.icon
                        return (
                            <div
                                key={feature.id}
                                className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Icon */}
                                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-t from-[#7AA876] to-[#2E574D] rounded-lg">
                                    <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
