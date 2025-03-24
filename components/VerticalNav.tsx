// components/VerticalNav.tsx
'use client';
import { useEffect, useState } from 'react';
// import { HomeIcon, UserIcon, BriefcaseIcon, MailIcon } from '@heroicons/react/24/solid';
import { BriefcaseIcon, HomeIcon, MailIcon, UserIcon, LaptopMinimalCheckIcon } from 'lucide-react';

const navItems = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'about', icon: UserIcon, label: 'About' },
    { id: 'work-experience', icon: BriefcaseIcon, label: 'Work Experience' },
    { id: 'projects', icon: LaptopMinimalCheckIcon, label: 'Projects' },
    { id: 'contact', icon: MailIcon, label: 'Contact' },
];

export default function VerticalNav() {
    const [activeId, setActiveId] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            for (const item of navItems) {
                const section = document.getElementById(item.id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveId(item.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="hidden sm:flex fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
            {navItems.map(({ id, icon: Icon, label }) => (
                <div key={id} className="group relative">
                    <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md transition
            ${activeId === id ? 'bg-primary text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
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
