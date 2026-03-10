import Link from 'next/link'

export const metadata = {
    title: "Our Story - Advanced Fitness",
    description: "Discover the story behind Advanced Fitness. From a quiet warehouse to Nairobi's premier fitness movement, built on discipline, consistency, and passion.",
    alternates: {
        canonical: '/our-story',
    },
}

export default function OurStoryPage() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.advancedfitness.co.ke';

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: baseUrl,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Our Story',
                item: `${baseUrl}/our-story`,
            },
        ],
    };

    return (
        <div className="min-h-screen bg-white pt-24 pb-12 text-gray-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <Link href="/#our-story" className="text-gray-500 hover:text-primary transition-colors flex items-center mb-6 text-lg font-medium">
                            <span className="mr-2">←</span> Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 uppercase">
                            <span className="text-primary">Our</span> Story
                        </h1>
                        <div className="h-1 w-24 bg-primary mt-4 mb-8"></div>
                    </div>

                    <div className="space-y-6 text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                        <p>
                            Before it was a gym, it was just a store.<br />
                            A quiet warehouse.<br />
                            Concrete floors, steel doors, space with no audience — only potential.
                        </p>

                        <p>
                            Inside that warehouse, the owner trained alone. No mirrors for show, no crowds for validation. Just discipline, consistency, and a deep respect for the craft of training. Fitness wasn’t a business then — it was personal. It was therapy. It was purpose.
                        </p>

                        <p>
                            But greatness never stays hidden for long.
                        </p>

                        <p>
                            Friends began to notice the results.<br />
                            The strength.<br />
                            The transformation.<br />
                            The mindset.
                        </p>

                        <p>
                            They came to train. Then they came again. And again.<br />
                            Soon, the quiet warehouse was no longer quiet.
                        </p>

                        <p>
                            “Open it to the public.”<br />
                            “You can’t keep this to yourself.”<br />
                            “People need this.”
                        </p>

                        <p>
                            At first, it was resisted. This place was private. Sacred.<br />
                            But destiny has a way of knocking louder when it’s time.
                        </p>

                        <p>
                            Then came COVID — a time when the world slowed down, fear took over, and most doors closed. While others saw uncertainty, this warehouse saw opportunity. A chance to build something different. Something stronger. Something advanced.
                        </p>

                        <p>
                            Against the odds, during one of the hardest global moments, Advanced Gym was born.
                        </p>

                        <p>
                            Not as a trend.<br />
                            Not as a quick business move.<br />
                            But as a statement.
                        </p>

                        <p>
                            A statement that strength is built in hard times.<br />
                            That community matters most when the world feels disconnected.<br />
                            That real gyms are forged by passion — not convenience.
                        </p>

                        <p>
                            Advanced was created for those who want more.<br />
                            More than basic workouts.<br />
                            More than average results.<br />
                            More than excuses.
                        </p>

                        <p>
                            From a warehouse to a movement.<br />
                            From private sessions to a powerful community.<br />
                            From vision to reality.
                        </p>

                        <p className="font-medium text-gray-900 text-2xl mt-12 mb-4">
                            This is not just a gym.<br />
                            This is Advanced.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
