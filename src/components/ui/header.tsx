'use client'

import Link from 'next/link';
import { useState } from 'react';
import { STORE_NAME } from '@/lib/constants';
import { CartButton } from '../../components/ui/cart/CartButton';
import { CartDrawer } from '../ui/cart/CartDrawer';

export default function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <Link href="/" className="font-bold text-xl">
                            {STORE_NAME}
                        </Link>
                        <div className="flex items-center space-x-6">
                            <Link href="/products" className="text-gray-700 hover:text-gray-900">
                                Shop
                            </Link>
                            <CartButton onClick={() => setIsCartOpen(true)} />
                        </div>
                    </div>
                </nav>
            </header>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}