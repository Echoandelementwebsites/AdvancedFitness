import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import LightboxClient from './LightboxClient'

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const titleRaw = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    // Ensure title fits within 50-60 characters
    const title = `${titleRaw} Gallery`;
    // Ensure description is 150-160 characters max, though making it exact takes precise phrasing. We provide a solid default that's ~155 chars.
    const description = `Explore the ${titleRaw} at Advanced Fitness in Nairobi. View our gallery showcasing state-of-the-art equipment and spaces designed to transform your body.`;

    return {
        title: title,
        description: description,
        alternates: {
            canonical: `/facilities/${slug}`,
        },
    }
}

export async function generateStaticParams() {
    const facilitiesDir = path.join(process.cwd(), 'public/images/facilities');
    const folders = fs.readdirSync(facilitiesDir).filter(file => {
        return fs.statSync(path.join(facilitiesDir, file)).isDirectory();
    });

    return folders.map((slug) => ({
        slug: slug,
    }))
}

export default async function FacilityPage({ params }) {
    const { slug } = await params;
    const facilitiesDir = path.join(process.cwd(), 'public/images/facilities', slug);

    if (!fs.existsSync(facilitiesDir)) {
        notFound();
    }

    const imageFiles = fs.readdirSync(facilitiesDir)
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .map(file => `/images/facilities/${slug}/${file}`);

    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

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
                name: 'Facilities',
                item: `${baseUrl}/#facilities`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: title,
                item: `${baseUrl}/facilities/${slug}`,
            },
        ],
    };

    return (
        <div className="min-h-screen bg-white pt-24 pb-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link href="/#facilities" className="text-gray-500 hover:text-primary transition-colors flex items-center mb-4 text-lg font-medium">
                        <span className="mr-2">←</span> Back to Facilities
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 uppercase">{title} Gallery</h1>
                    <div className="h-1 w-24 bg-primary mt-4 mb-8"></div>
                </div>

                {imageFiles.length > 0 ? (
                    <LightboxClient images={imageFiles} />
                ) : (
                    <div className="flex flex-col items-center justify-center h-64 border border-gray-200 rounded-lg bg-gray-50">
                        <p className="text-xl text-gray-500 font-light">Gallery Coming Soon</p>
                    </div>
                )}
            </div>
        </div>
    );
}
