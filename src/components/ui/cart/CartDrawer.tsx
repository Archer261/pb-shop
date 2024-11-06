import { useCart } from '@/context/CartContext';
import { CartItem } from './CartItem';

export const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const { cart, updateQuantity, removeItem, clearCart } = useCart();

    return (
        <div
            className={`fixed inset-y-0 right-0 w-96 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            <div className="h-full flex flex-col p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Your Cart</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        ✕
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {cart.items.length === 0 ? (
                        <p className="text-gray-500 text-center mt-8">Your cart is empty</p>
                    ) : (
                        cart.items.map((item) => (
                            <CartItem
                                key={item.productId}
                                item={item}
                                onUpdateQuantity={(quantity) => updateQuantity(item.productId, quantity)}
                                onRemove={() => removeItem(item.productId)}
                            />
                        ))
                    )}
                </div>

                {cart.items.length > 0 && (
                    <div className="mt-4 pt-4 border-t">
                        <div className="flex justify-between mb-4">
                            <span className="font-bold">Total:</span>
                            <span className="font-bold">${cart.total.toFixed(2)}</span>
                        </div>
                        <button
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                            onClick={() => {/* Implement checkout */ }}
                        >
                            Checkout
                        </button>
                        <button
                            className="w-full mt-2 text-gray-500 hover:text-gray-700"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};