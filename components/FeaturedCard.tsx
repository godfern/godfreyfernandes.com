import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

interface FeaturedCardProps {
    title: string;
    description: string;
    href: string;
}

export default function FeaturedCard({ title, description, href }: FeaturedCardProps) {
    return (
        <Link href={href} className="block bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{description}</p>
                </div>
                <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-primary" />
            </div>
        </Link>
    );
}