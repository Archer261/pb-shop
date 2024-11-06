// src/app/products/[id]/page.tsx
import { Product } from '@/types/product'
import { notFound } from 'next/navigation'

async function getProduct(id: string): Promise<Product> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, {
        cache: 'no-store'
    })

    if (!res.ok) {
        notFound()
    }

    return res.json()
}

export default async function ProductDetailPage({
    params: { id }
}: {
    params: { id: string }
}) {
    const product = await getProduct(id)

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full rounded-lg shadow-md"
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <div className="flex items-center mb-4">
                        <span className="text-2xl font-bold">${product.price}</span>
                        <span className={`ml-4 px-2 py-1 rounded ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>

                    <p className="text-gray-700 mb-6">{product.description}</p>

                    <div className="border-t pt-6">
                        <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                        <dl className="grid grid-cols-1 gap-4">
                            {product.specifications?.weight && (
                                <>
                                    <dt className="font-medium text-gray-600">Weight</dt>
                                    <dd>{product.specifications.weight}</dd>
                                </>
                            )}
                            {product.specifications?.dimensions && (
                                <>
                                    <dt className="font-medium text-gray-600">Dimensions</dt>
                                    <dd>{product.specifications.dimensions}</dd>
                                </>
                            )}
                            {product.specifications?.material && (
                                <>
                                    <dt className="font-medium text-gray-600">Material</dt>
                                    <dd>{product.specifications.material}</dd>
                                </>
                            )}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}