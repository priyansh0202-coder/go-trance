"use client"

import type React from "react"

import { useState } from "react"

export function GuidanceFormSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        city: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Handle form submission here
        setFormData({ firstName: "", lastName: "", phoneNumber: "", city: "" })
    }

    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left side - Illustration */}
                    <div className="flex items-center justify-center">
                        <div className="relative md:w-96 md:h-96 w-70 h-70">
                            {/* Placeholder for illustration */}
                           <img src="/about/form.png" alt="" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>

                    {/* Right side - Form */}
                    <div className="bg-white rounded-lg shadow-lg ">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
                                Get Personalized Guidance for Your MBBS Journey
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* First Name and Last Name Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="John"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Smith"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone Number and City Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            placeholder="Phone"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="Pune"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4 flex justify-center">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-8 rounded-lg transition duration-200"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
