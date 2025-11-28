"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MapPin, Mail } from "lucide-react"

interface FormData {
    name: string
    email: string
    countryCode: string
    mobileNumber: string
    city: string
    message: string
}

export default function ContactFormSection() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        countryCode: "+91",
        mobileNumber: "",
        city: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Handle form submission here
        setFormData({
            name: "",
            email: "",
            countryCode: "+91",
            mobileNumber: "",
            city: "",
            message: "",
        })
    }

    return (
        <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 md:py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Main Contact Container */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
                        {/* Form Section */}
                        <div className="bg-white p-4 md:p-12 flex flex-col justify-center">
                            <div className="bg-teal-700 p-2 md:p-8 rounded-xl">

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                                Contact KlickEdu
                                <div className="text-sm md:text-base font-normal mt-2">#1 MBBS Abroad Consultant from India</div>
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name Input */}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name*"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                                />

                                {/* Email Input */}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email*"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                                />

                                {/* Country Code + Mobile Number */}
                                <div className="grid grid-cols-4 gap-2">
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="col-span-1 px-3 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-lime-400"
                                    >
                                        <option value="+91">+91</option>
                                        <option value="+1">+1</option>
                                        <option value="+44">+44</option>
                                        <option value="+61">+61</option>
                                    </select>
                                    <input
                                        type="tel"
                                        name="mobileNumber"
                                        placeholder="Mobile Number*"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        required
                                        className="col-span-3 px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                                    />
                                </div>

                                {/* City Input */}
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                                />

                                {/* Message Textarea */}
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none"
                                />

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-teal-600 hover:bg-teal-800 text-white font-bold py-3 px-4 rounded transition duration-300"
                                >
                                    Submit
                                </button>
                            </form>
                            </div>
                        </div>

                        {/* Contact Info & Illustration Section */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            {/* Illustration Placeholder */}
                            <div className="mb-8 flex justify-center">
                                <img src="/contact-us/contact-form.png" alt="Contact Form Illustration" className="w-40 h-40 md:w-full md:h-full" />
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-6">
                                {/* Helpline */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-teal-100">
                                            <Phone className="h-5 w-5 text-teal-700" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Helpline Number</h3>
                                        <p className="text-gray-700 mt-1">8111 99 6000</p>
                                    </div>
                                </div>

                                {/* Head Office */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-teal-100">
                                            <MapPin className="h-5 w-5 text-teal-700" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Head Office</h3>
                                        <p className="text-gray-700 mt-1 text-sm">
                                            KlickEdu, 1st Floor, 495 Building, behind New Theatre, Attica, Thampanoor, Thiruvananthapuram,
                                            Kerala, 695012.
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-teal-100">
                                            <Mail className="h-5 w-5 text-teal-700" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Mail</h3>
                                        <p className="text-gray-700 mt-1">info@clickedu.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
