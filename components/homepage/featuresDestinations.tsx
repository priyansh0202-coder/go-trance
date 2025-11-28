import { MapPin } from "lucide-react"

interface DestinationCard {
    id: string
    country: string
    image: string
    universities: number
    description: string
    features: string[]
}

const destinations: DestinationCard[] = [
    {
        id: "georgia",
        country: "Georgia",
        image: "/homepage/georgia.png",
        universities: 33,
        description: "World-class medical education with WHO recognition",
        features: ["English-medium instruction", "Affordable fees", "NMC recognized"],
    },
    {
        id: "tajikistan",
        country: "Tajikistan",
        image: "/homepage/tajikistan.png",
        universities: 6,
        description: "Emerging hub for medical excellence in Central Asia",
        features: ["Modern facilities", "Experienced faculty", "International standards"],
    },
    {
        id: "kyrgyzstan",
        country: "Kyrgyzstan",
        image: "/homepage/kyrgyztan.png",
        universities: 8,
        description: "Affordable quality medical education",
        features: ["Low tuition costs", "Scenic location", "Growing reputation"],
    },
    {
        id: "kazakhstan",
        country: "Kazakhstan",
        image: "/homepage/kazakstan.png",
        universities: 13,
        description: "Modern infrastructure and advanced medical programs",
        features: ["State-of-the-art labs", "Strong curriculum", "Career opportunities"],
    },
]

export function FeaturedDestinations() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        Featured <span className="text-teal-600">Destinations</span>
                    </h2>
                    <p className="text-gray-600 text-lg">Explore top medical universities across Central Asia and the Caucasus</p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {destinations.map((destination) => (
                        <div
                            key={destination.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                        >
                            {/* Image */}
                            <div className="h-48 p-2">
                                <img
                                    src={destination.image || "/placeholder.svg"}
                                    alt={destination.country}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col h-full">
                                {/* Country Header */}
                                <div className="mb-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MapPin className="w-5 h-5 text-teal-600" />
                                        <h3 className="text-xl font-bold text-gray-900">{destination.country}</h3>
                                    </div>
                                    <p className="text-sm text-gray-500">{destination.universities} universities available</p>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 text-sm mb-4">{destination.description}</p>

                                {/* Features List */}
                                <ul className="space-y-2 mb-6 ">
                                    {destination.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-gray-900 font-semibold">•</span>
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <button className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-4 rounded-md mt-4">
                                    Explore Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
