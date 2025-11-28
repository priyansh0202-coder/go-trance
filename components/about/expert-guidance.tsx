import { CheckCircle2 } from "lucide-react"

export function ExpertGuideSection() {
    const features = [
        "Russia Medi is a sister company of KlickEdu.",
        "Helping you turn your dream of studying MBBS in Russia into a reality.",
        "Providing accurate, up-to-date information about universities and admissions.",
        "Connecting students with world-class medical education opportunities.",
    ]

    return (
        <section className="relative bg-gradient-to-b from-teal-50 to-white py-12 md:py-20 overflow-hidden">
            {/* Decorative wavy shapes */}
            <div className="absolute top-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-teal-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-40 md:w-56 h-40 md:h-56 bg-teal-100 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-center">
                    {/* Left side - Image */}
                    <div className="flex justify-center ">
                        <div className="relative w-full max-w-sm">
                            <img
                                src="/about/expert-guidance.png"
                                alt="Medical professionals studying"
                                className="w-full h-80 md:h-80 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Your Expert Guide to</h2>
                            <h3 className="text-2xl md:text-3xl font-bold text-teal-600">MBBS Studies in Russia</h3>
                        </div>

                        {/* Features List */}
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">{feature}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                                Learn More Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
