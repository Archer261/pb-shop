import { useCart } from '@/context/CartContext';
import { CartItem } from '@/types/cart';

interface AddToCartButtonProps {
    product: {
        id: string;
        name: string;
        price: number;
        image?: string;
    };
}

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
    const { addItem } = useCart();

    const handleAddToCart = () => {
        const cartItem: CartItem = {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image
        };
        addItem(cartItem);
    };

    return (
        <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Add to Cart
        </button>
    );
};