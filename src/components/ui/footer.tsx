import { STORE_NAME } from '@/lib/constants';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">Shop</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a href="/products/paddles" className="text-gray-600 hover:text-gray-900">
                                    Paddles
                                </a>
                            </li>
                            <li>
                                <a href="/products/balls" className="text-gray-600 hover:text-gray-900">
                                    Balls
                                </a>
                            </li>
                            <li>
                                <a href="/products/accessories" className="text-gray-600 hover:text-gray-900">
                                    Accessories
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a href="/about" className="text-gray-600 hover:text-gray-900">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-600 hover:text-gray-900">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <p className="text-gray-400 text-sm text-center">
                        © {new Date().getFullYear()} {STORE_NAME}. All rights reserved.
                    </p>
                    <p className="text-gray-400 text-sm text-center">
                        KJ Archer Designs
                    </p>
                </div>
            </div>
        </footer>
    );
}