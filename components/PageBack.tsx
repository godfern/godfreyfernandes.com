'use client';
import { useRouter } from 'next/navigation';
import { MoveLeft } from 'lucide-react';
import { PAGE_IDS, SECTION_COLOR_MAP } from '../lib/constants/app'

const PageBackButton = ({ className = '', id }) => {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push('/')}
            className={`group p-2 rounded-full transition hover:bg-white/10 ${className}`}
        >
            <span className="glowing-icon">
                <MoveLeft size={48} strokeWidth={0.5} className={`text-white group-hover:text-${SECTION_COLOR_MAP[id]}-400 transition`} />
            </span>
        </button>
    );
};

export default PageBackButton;
