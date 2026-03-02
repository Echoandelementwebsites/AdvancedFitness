import { Inter, Oswald } from 'next/font/google'
import "./globals.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.advancedfitness.co.ke'),
    title: {
        template: '%s | Advanced Fitness',
        default: "Advanced Fitness - Nairobi's Premier Gym",
    },
    description: "Join Advanced Fitness in Nairobi. State-of-the-art equipment, boxing, HIIT, and personal training. Transform your body today.",
    alternates: {
        canonical: '/',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${oswald.variable} font-sans bg-white text-gray-900 selection:bg-primary selection:text-white flex flex-col min-h-screen`}>
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
