// components/VerticalNav.tsx
'use client';
import { useEffect, useState } from 'react';
// import { HomeIcon, UserIcon, BriefcaseIcon, MailIcon } from '@heroicons/react/24/solid';
import { BriefcaseIcon, HomeIcon, MailIcon, UserIcon, LaptopMinimalCheckIcon } from 'lucide-react';

const navItems = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'about', icon: UserIcon, label: 'About', color: "hover:border hover:border-red-500 hover:text-white hover:shadow-[0_0_10px_#ff1a1a] hover:shadow-red-400 transition" },
    { id: 'work-experience', icon: BriefcaseIcon, label: 'Work Experience', color: "hover:border hover:border-blue-500 hover:text-white hover:shadow-[0_0_10px_#00bfff] hover:shadow-blue-400 transition" },
    { id: 'projects', icon: LaptopMinimalCheckIcon, label: 'Projects', color: "hover:border hover:border-green-500 hover:text-white hover:shadow-[0_0_10px_#00ff00] hover:shadow-green-400 transition" },
    { id: 'contact', icon: MailIcon, label: 'Contact', color: "hover:border hover:border-yellow-500 hover:text-white hover:shadow-[0_0_10px_#ffd700] hover:shadow-yellow-400 transition" },
];

export default function VerticalNav() {
    const [activeId, setActiveId] = useState('home');

    useEffect(() => {
        const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { root: null, threshold: 0.5 } // 50% of section must be visible
        );

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const shadowMap = {
        "about": "border border-red-500 text-white shadow-[0_0_10px_#ff1a1a] hover:shadow-red-400 transition",
        "work-experience": "border border-blue-500 text-white shadow-[0_0_10px_#00bfff] hover:shadow-blue-400 transition",
        "projects": "border border-green-500 text-white shadow-[0_0_10px_#00ff00] hover:shadow-green-400 transition",
        "contact": "border border-yellow-500 text-white shadow-[0_0_10px_#ffd700] hover:shadow-yellow-400 transition",
    }

    let activeNavStyle = shadowMap[activeId] || 'bg-primary text-white';

    return (
        <nav className="hidden sm:flex fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
            {navItems.map(({ id, icon: Icon, label, color }) => (
                <div key={id} className="group relative">
                    <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`w-12 h-12 flex items-center justify-center rounded-full shadow-sm transition
            ${activeId === id ? activeNavStyle : `bg-gray-800 text-gray-400 ${color}`}`}
                        aria-label={label}
                    >
                        <Icon className="w-6 h-6" />
                    </button>
                    <span className="absolute left-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap transition duration-200">
                        {label}
                    </span>
                </div>
            ))}
        </nav>
    );
}
