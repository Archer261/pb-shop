import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { Product } from '@/types/product'

export async function GET() {
    try {
        const client = await clientPromise
        // const db = client.db("pickleballstore")
        const db = client.db("Clusters")

        const products = await db
            .collection('products')
            .find({})
            .toArray()

        return NextResponse.json(products)
    } catch (e) {
        console.error(e)
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
    }
}