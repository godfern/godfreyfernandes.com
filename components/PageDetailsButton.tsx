'use client';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const PageDetailsButton = ({path }) => {
    const router = useRouter();

    return (
        // <button
        //     onClick={() => router.push('/')}
        //     className={`group p-2 rounded-full transition hover:bg-white/10 ${className}`}
        // >
        //     <span className="glowing-icon">
        //         {/* <MoveLeft size={48} strokeWidth={0.5} className="text-white group-hover:text-red-400 transition" /> */}
        //         <ChevronRight size={48} strokeWidth={0.5} />
        //     </span>
        // </button>
        <button
            onClick={() => router.push(`${path}`)}
            // className="absolute inset-y-0 right-0 h-full flex items-center justify-center shadow-lg"
            className="absolute inset-y-0 right-0 h-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
            <span className="glowing-icon">
                <ChevronRight size={48} strokeWidth={0.5} />
            </span>
        </button>
    );
};

export default PageDetailsButton;
