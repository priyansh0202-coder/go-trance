"use client"

import { ArrowRight } from "lucide-react"

export function CTASection() {
    return (
        <section className="bg-gradient-to-r from-teal-700 to-teal-900 py-12 md:py-20 relative overflow-hidden">
            {/* Decorative curved lines */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-20">
                <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" stroke="white" strokeWidth="2">
                    <path d="M 100 100 Q 250 50 300 200" />
                    <path d="M 120 80 Q 260 30 320 180" />
                    <path d="M 150 120 Q 280 70 340 220" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Ready to Start Your MBBS Journey?</h2>
                        <p className="text-lg md:text-xl max-w-xl mb-8 text-teal-50">
                            Get personalized guidance from our experts and find the perfect university for your medical education.
                        </p>
                        <button className="bg-lime-300 hover:bg-lime-400 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Right Image - Placeholder */}
                    <div className="relative hidden md:block">
                        <div className="relative">
                            <img
                                src="/homepage/Docter.png"
                                alt="Medical professional"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                            {/* Additional decorative elements */}
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-600 rounded-full opacity-20 blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
