"use client"

import { Star } from "lucide-react"

interface Testimonial {
    id: number
    name: string
    university: string
    location: string
    program: string
    year: string
    quote: string
    avatar: string
    rating: number
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Arjun Patel",
        university: "Tbilisi State Medical University",
        location: "Georgia",
        program: "2024",
        year: "2024",
        quote:
            '"Go Trance made my MBBS dream a reality. The entire process was smooth, from application to visa approval. Highly recommended!"',
        avatar: "/homepage/testmonial-1.png",
        rating: 5,
    },
    {
        id: 2,
        name: "Priya Sharma",
        university: "Al-Farabi Kazakh National University",
        location: "Kazakhstan",
        program: "MBBS",
        year: "MBBS",
        quote:
            '"The personalized guidance I received was exceptional. My counselor understood my goals and matched me with the perfect university."',
        avatar: "/homepage/testmonial-2.png",
        rating: 5,
    },
    {
        id: 3,
        name: "Neha Gupta",
        university: "Avicenna Tajik State Medical University",
        location: "Tajikistan",
        program: "MBBS",
        year: "MBBS",
        quote:
            '"The visa support and accommodation assistance made my transition to Tajikistan seamless. Go Trance is truly a one-stop solution!"',
        avatar: "/homepage/testmonial-3.png",
        rating: 5,
    },
]

export function TestimonialsSection() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Student <span className="text-teal-600 border-b-4 border-teal-600 pb-1">Testimonials</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg">
                        Hear from students who have successfully pursued their MBBS abroad
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="flex flex-col">
                            {/* Card */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex-grow">
                                {/* Avatar */}
                                <div className="flex justify-center mb-4">
                                    <img
                                        src={testimonial.avatar || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        className="w-26 h-26 rounded-full border-4 border-teal-200 object-cover"
                                    />
                                </div>

                                {/* Quote */}
                                <p className="text-gray-700 text-sm md:text-base mb-4 text-center">{testimonial.quote}</p>

                                {/* Rating */}
                                <div className="flex justify-center gap-1 mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* University Info */}
                                <div className="text-center text-sm text-gray-600 mb-4">
                                    <p className="font-semibold text-blue-600">{testimonial.university}</p>
                                    <p>{testimonial.location}</p>
                                    <p>{testimonial.program}</p>
                                </div>
                            </div>

                            {/* Name Banner */}
                            <div className="bg-blue-100 rounded-b-lg p-4 text-center">
                                <p className="font-bold text-gray-800">{testimonial.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
