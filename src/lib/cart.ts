import { CartState } from "@/types/cart";

export const saveCartToLocalStorage = (cart: CartState) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};

export const loadCartFromLocalStorage = (): CartState => {
    if (typeof window !== 'undefined') {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            return JSON.parse(savedCart);
        }
    }
    return { items: [], total: 0 };
};