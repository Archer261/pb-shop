// export interface Product {
//     id: string;
//     name: string;
//     description: string;
//     price: number;
//     images: string[];
//     category: 'paddles' | 'balls' | 'accessories' | 'clothing';
//     inStock: boolean;
//     featured?: boolean;
// }

export interface Product {
    _id: string
    name: string
    description: string
    price: number
    category: string
    image: string
    brand: string
    inStock: boolean
    specifications?: {
        weight?: string
        dimensions?: string
        material?: string
    }
    createdAt: Date
    updatedAt: Date
}