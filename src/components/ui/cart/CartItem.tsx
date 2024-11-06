import Image from 'next/image';
import { CartItem as CartItemType } from '@/types/cart';

interface CartItemProps {
    item: CartItemType;
    onUpdateQuantity: (quantity: number) => void;
    onRemove: () => void;
}

export const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
    return (
        <div className="flex items-center py-4 border-b">
            {item.image && (
                <div className="w-20 h-20 relative">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                    />
                </div>
            )}
            <div className="flex-1 ml-4">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                    <button
                        className="px-2 py-1 border rounded"
                        onClick={() => onUpdateQuantity(Math.max(0, item.quantity - 1))}
                    >
                        -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                        className="px-2 py-1 border rounded"
                        onClick={() => onUpdateQuantity(item.quantity + 1)}
                    >
                        +
                    </button>
                    <button
                        className="ml-4 text-red-500 text-sm"
                        onClick={onRemove}
                    >
                        Remove
                    </button>
                </div>
            </div>
            <div className="text-right">
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        </div>
    );
};