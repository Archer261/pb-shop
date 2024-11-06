// src/app/products/page.tsx
import { Product } from '@/types/product'
import Image from 'next/image'

async function getProducts(): Promise<Product[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
        cache: 'no-store'
    })

    if (!res.ok) {
        throw new Error('Failed to fetch products')
    }

    return res.json()
}

export default async function ProductsPage() {
    const products = await getProducts()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Pickle Ball Equipment</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={40}
                            height={40}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold">${product.price}</span>
                                <span className={`px-2 py-1 rounded ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}