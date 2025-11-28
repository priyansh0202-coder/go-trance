import { Users, FileText, Award, Rocket, Globe, Building2 } from "lucide-react"

const services = [
    {
        id: 1,
        title: "Personalized University Matching",
        description: "Find your perfect fit university based on your profile and preferences",
        icon: Users,
    },
    {
        id: 2,
        title: "Full Application Support",
        description: "We handle your complete application process from start to finish",
        icon: FileText,
    },
    {
        id: 3,
        title: "Exclusive Scholarships",
        description: "Access tailored funding opportunities and financial aid",
        icon: Award,
    },
    {
        id: 4,
        title: "Expert Visa Guidance",
        description: "Maximize your visa approval chances with our expert guidance",
        icon: Rocket,
    },
    {
        id: 5,
        title: "Pre-Departure & Arrival Support",
        description: "Prepare for your study abroad experience with comprehensive support",
        icon: Globe,
    },
    {
        id: 6,
        title: "Accommodation Assistance",
        description: "Secure comfortable housing near your campus",
        icon: Building2,
    },
]

export function ServicesSection() {
    return (
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                        Our <span className="text-teal-600 border-b-4 border-teal-600 pb-1">Services</span>
                    </h2>
                    <p className="text-gray-600 text-lg mt-4">Everything you need for a successful MBBS journey abroad</p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={service.id}
                                className="flex flex-col p-6 shadow-lg bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Icon */}
                                <div className="mb-4">
                                    <Icon className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
