import Hero from "../components/Hero"
import About from "../components/About"
import Schedule from "../components/Schedule"
import Facilities from "../components/Facilities"
import Contact from "../components/Contact"

export const metadata = {
    title: "Advanced Fitness - Nairobi's Premier Gym",
    description: "Join Advanced Fitness in Nairobi. State-of-the-art equipment, boxing, HIIT, and personal training. Transform your body today.",
    alternates: {
        canonical: '/',
    },
}

export default function Home() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': ['ExerciseGym', 'LocalBusiness'],
        name: 'Advanced Fitness',
        description: "Join Advanced Fitness in Nairobi. State-of-the-art equipment, boxing, HIIT, and personal training. Transform your body today.",
        url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.advancedfitness.co.ke',
        telephone: '+254721992516',
        email: 'advancedfitnesscentreltd@gmail.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Nairobi',
            addressCountry: 'KE',
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <About />
            <Schedule />
            <Facilities />
            <Contact />
        </>
    )
}
