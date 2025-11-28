"use client"

export function Footer() {
    return (
        <footer className="bg-teal-700 text-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
                    {/* Left section - Branding and address */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Go Trance</h2>
                        <p className="text-sm md:text-base mb-6 leading-relaxed">Your trusted partner in MBBS education abroad.</p>
                        <p className="text-xs md:text-sm leading-relaxed opacity-90">
                            Phulwariya , Nawalshahi, Near By Axis Bank ATM,
                            <br />
                            Baidbar Koderma ,Jharkhand, 625418.
                        </p>
                    </div>

                    {/* Right section - Links columns */}
                    <div className="grid grid-cols-2 gap-8 md:gap-16">
                        {/* Destinations column */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-sm md:text-base hover:opacity-80 transition-opacity">
                                        Georgia
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm md:text-base hover:opacity-80 transition-opacity">
                                        Tajikistan
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm md:text-base hover:opacity-80 transition-opacity">
                                        Kyrgyzstan
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm md:text-base hover:opacity-80 transition-opacity">
                                        Kazakhstan
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company column */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/" className="text-sm md:text-base hover:opacity-80 transition-opacity">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/about" className="text-sm md:text-base hover:opacity-80 transition-opacity">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact-us" className="text-sm md:text-base hover:opacity-80 transition-opacity">
                                        contact us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider line */}
                <div className="border-t border-white/30 opacity-50"></div>
            </div>
        </footer>
    )
}
