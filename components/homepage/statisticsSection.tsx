import { Users, BookOpen, GraduationCap, FileText } from "lucide-react"

const stats = [
    {
        number: "12+",
        label: "Years of expertise",
        icon: Users,
        bgColor: "bg-orange-100",
        iconColor: "text-orange-500",
    },
    {
        number: "1500+",
        label: "Satisfied students counselled",
        icon: BookOpen,
        bgColor: "bg-blue-100",
        iconColor: "text-blue-500",
    },
    {
        number: "10",
        label: "Universities affiliated with us!",
        icon: GraduationCap,
        bgColor: "bg-teal-100",
        iconColor: "text-teal-500",
    },
    {
        number: "100+",
        label: "Visa Assistance",
        icon: FileText,
        bgColor: "bg-purple-100",
        iconColor: "text-purple-500",
    },
]

export function StatisticsSection() {
    return (
        <section className="bg-slate-100 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Grid of statistics cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 md:p-8 pt-16 md:pt-20 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center relative"
                            >
                                <div
                                    className={`${stat.bgColor} rounded-full w-24 h-24 flex items-center justify-center mb-6 absolute -top-12`}
                                >
                                    <IconComponent className={`${stat.iconColor} w-12 h-12`} />
                                </div>

                                {/* Number */}
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">{stat.number}</h3>

                                {/* Label */}
                                <p className="text-slate-600 text-base md:text-lg">{stat.label}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}