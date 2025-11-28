"use client"

import { ArrowRight } from "lucide-react"

const articles = [
    {
        category: "Study Guide",
        date: "Now 15, 2025",
        title: "Is MBBS in Georgia Worth It? Key Factors to Consider",
        excerpt:
            "Pursuing an MBBS in Georgia has become increasingly popular due to affordable tuition, globally recognized degrees, and English-medium instruction.",
        categoryColor: "bg-blue-100 text-blue-600",
    },
    {
        category: "Admission Guide",
        date: "Now 12, 2025",
        title: "Complete Guide to MBBS Admission in Kazakhstan",
        excerpt:
            "Discover the admission requirements, application process, and what you need to know about studying medicine in Kazakhstan.",
        categoryColor: "bg-blue-100 text-blue-600",
    },
    {
        category: "Visa Guide",
        date: "Now 10, 2025",
        title: "Visa Process for Medical Students in Central Asia",
        excerpt: "Step-by-step guide to obtaining your student visa for Tajikistan, Kyrgyzstan, Kazakhstan, and Georgia.",
        categoryColor: "bg-blue-100 text-blue-600",
    },
]

export function ArticlesSection() {
    return (
        <section className="py-16  px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">

                    {/* Centered heading container */}
                    <div className="flex-1 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Latest{" "}
                            <span className="text-teal-600 border-b-4 border-teal-600 pb-1">
                                Articles
                            </span>
                        </h2>
                        <p className="text-gray-600 mt-3">
                            Stay updated with insights about MBBS abroad
                        </p>
                    </div>

                    {/* View All button - right aligned */}
                    <a
                        href="/articles"
                        className="hidden md:flex items-center gap-2 text-gray-800 font-semibold hover:text-teal-600 transition-colors"
                    >
                        View All <ArrowRight size={20} />
                    </a>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                        >
                            {/* Category and Date */}
                            <div className="flex items-center justify-between mb-3">
                                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${article.categoryColor}`}>
                                    {article.category}
                                </span>
                                <span className="text-sm text-gray-500">{article.date}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>

                            {/* Excerpt */}
                            <p className="text-gray-600 text-sm mb-6 line-clamp-3">{article.excerpt}</p>

                            {/* Read More Link */}
                            <a href="#" className="text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                Study Guide <ArrowRight size={18} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
