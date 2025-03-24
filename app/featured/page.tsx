import FeaturedCard from '../../components/FeaturedCard';

export default function FeaturedSection() {
    const products = [
        {
            title: 'Claim Management System',
            description: 'UI for handling claim lifecycles with permissions, comments, and forms.',
            href: '/projects/claim-management'
        },
        {
            title: 'Dynamic Form Renderer',
            description: 'Schema-driven renderer integrated with Fortuna and MART.',
            href: '/projects/dynamic-form'
        },
    ];

    return (
        <section className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {products.map((product) => (
                    <FeaturedCard key={product.title} {...product} />
                ))}
            </div>
        </section>
    );
}