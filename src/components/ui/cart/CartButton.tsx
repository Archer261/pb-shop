import { useCart } from '@/context/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';

interface CartButtonProps {
    onClick: () => void;
}

export function CartButton({ onClick }: CartButtonProps) {
    const { cart } = useCart();
    const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <button
            onClick={onClick}
            className="relative flex items-center text-gray-700 hover:text-gray-900"
            aria-label="Open cart"
        >
            <ShoppingCartIcon className="h-6 w-6" />
            {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                </span>
            )}
        </button>
    );
}