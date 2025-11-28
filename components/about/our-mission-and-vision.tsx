"use client"

import Image from "next/image"
import { CheckCircle2, Sparkles } from "lucide-react"

export function VisionMissionSection() {
    const visionPoints = [
        "To make the journey of studying medicine easy and stress-free for students.",
        "To be a trusted leader in helping students study MBBS abroad.",
        "To empower future doctors by giving them access to world-class medical education at affordable costs.",
        "To make the journey of studying medicine easy and stress-free for students.",
        "To have a lasting impact by making medical education accessible and achievable for all.",
    ]

    const missionPoints = [
        "To guide and support Indian students in fulfilling their dream of studying MBBS abroad.",
        "To provide clear, accurate, and personalized help with choosing universities, admission processes, and career planning.",
        "To make studying abroad simple by offering complete support for documentation, visa processing, and pre-departure preparations.",
        "To connect students with affordable, high-quality medical education in top global universities.",
        "To build trust with students and parents by focusing on their success and happiness.",
    ]

    return (
        <div className="bg-teal-700">
            <div className=" max-w-7xl mx-auto px-4">

            {/* Vision Section */}
            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Content */}
                    <div className="relative">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Vision</h2>
                        <div className="space-y-4">
                            {visionPoints.map((point, index) => (
                                <div key={index} className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-teal-100  mt-1" />
                                    <p className="text-white text-sm md:text-base leading-relaxed">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="absolute -top-4 right-16 w-12 h-12 text-teal-200 opacity-50">
                            <Sparkles className="w-full h-full" />
                        </div>
                        <Image
                            src="/about/our-vision.png"
                            alt="Medical University Building"
                            width={300}
                            height={250}
                            className="rounded-lg shadow-lg w-[70%] mx-auto md:w-[70%] h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="container mx-auto px-4 py-8 md:py-16 md:right-26 md:relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Image */}
                    <div className="relative order-2 md:order-1">
                        <div className="absolute -bottom-4 left-16 w-12 h-12 text-teal-200 opacity-50">
                            <Sparkles className="w-full h-full" />
                        </div>
                        <Image
                            src="/about/our-mission.png"
                            alt="Graduation Ceremony"
                            width={300}
                            height={250}
                            className="rounded-lg shadow-lg w-[70%] mx-auto md:w-[60%] h-auto"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="relative order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Mission</h2>
                        <div className="space-y-4">
                            {missionPoints.map((point, index) => (
                                <div key={index} className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-teal-100  mt-1" />
                                    <p className="text-white text-sm md:text-base leading-relaxed">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
