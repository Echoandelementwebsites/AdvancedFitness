import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import LightboxClient from './LightboxClient'

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

    return (
        <div className="min-h-screen bg-white pt-24 pb-12">
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
