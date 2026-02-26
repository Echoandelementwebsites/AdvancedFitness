import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-12 mt-auto border-t border-gray-200">
            <div className="container mx-auto px-4 text-center text-gray-600">
                <div className="mb-6">
                    <h4 className="text-2xl font-heading font-bold text-gray-900 uppercase mb-2">Advanced Fitness</h4>
                    <p className="text-sm">Nairobi, Kenya</p>
                </div>

                <p className="text-sm mb-6">&copy; {new Date().getFullYear()} Advanced Fitness Nairobi. All rights reserved.</p>
                <div className="flex justify-center space-x-6 text-sm font-heading tracking-wider">
                    <a href="#" className="hover:text-primary transition-colors">INSTAGRAM</a>
                    <a href="#" className="hover:text-primary transition-colors">FACEBOOK</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer
