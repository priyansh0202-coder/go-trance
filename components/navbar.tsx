"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

    const toggleMenu = () => setIsOpen(!isOpen)

    const toggleDropdown = (label: string) => {
        setDropdownOpen(dropdownOpen === label ? null : label)
    }

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        {
            label: "MBBS in Abroad",
            submenu: [
                { label: "MBBS in Georgia", href: "/mbbs-in-georgia" },
                { label: "MBBS in Tajikistan", href: "/mbbs-in-tajikistan" },
                { label: "MBBS in Kyrgyzstan", href: "/mbbs-in-kyrgyzstan" },
                { label: "MBBS in Kazakhstan", href: "/mbbs-in-kazakhstan" },
            ],
        },
        { label: "Contact Us", href: "/contact-us" },
    ]

    return (
        <nav className="absolute top-0 z-10 w-full bg-[#000000] text-white backdrop-blur-md opacity-60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-white hover:text-neutral-200 transition-colors">
                            Go Trance
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center mx-auto space-x-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href

                            if (item.submenu) {
                                const isSubmenuOpen = dropdownOpen === item.label

                                return (
                                    <div key={item.label} className="relative group">
                                        <button
                                            className="flex items-center text-[20px] font-medium hover:text-neutral-300"
                                            onClick={() => toggleDropdown(item.label)}
                                        >
                                            {item.label}
                                            <ChevronDown
                                                size={18}
                                                className={`ml-1 transition-transform duration-300 ${isSubmenuOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>

                                        {isSubmenuOpen && (
                                            <div className="absolute left-0 mt-2 w-48 bg-neutral-800 rounded-md  py-2">
                                                {item.submenu.map((sub) => (
                                                    <Link
                                                        key={sub.label}
                                                        href={sub.href}
                                                        className="block px-4 py-2 text-white hover:bg-neutral-700"
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )
                            }

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`text-[20px] font-medium transition-colors hover:text-neutral-300 ${isActive ? "text-cyan-400" : "text-white"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-neutral-700 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-neutral-700">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            const isSubmenuOpen = dropdownOpen === item.label

                            if (item.submenu) {
                                return (
                                    <div key={item.label}>
                                        <button
                                            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-neutral-600 flex justify-between"
                                            onClick={() => toggleDropdown(item.label)}
                                        >
                                            {item.label}
                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform duration-300 ${isSubmenuOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>

                                        {isSubmenuOpen && (
                                            <div className="ml-4 space-y-1">
                                                {item.submenu.map((sub) => (
                                                    <Link
                                                        key={sub.label}
                                                        href={sub.href}
                                                        className="block px-3 py-2 text-sm text-white hover:bg-neutral-600"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )
                            }

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? "bg-cyan-400 text-black" : "text-white hover:bg-neutral-600"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </nav>
    )
}
