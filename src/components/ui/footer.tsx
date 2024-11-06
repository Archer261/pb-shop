import { STORE_NAME } from '@/lib/constants';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">Shop</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/products/paddles" className="text-gray-600 hover:text-gray-900">
                                    Paddles
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/balls" className="text-gray-600 hover:text-gray-900">
                                    Balls
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/accessories" className="text-gray-600 hover:text-gray-900">
                                    Accessories
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                                    Contact
                                </Link>
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