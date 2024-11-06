'use client'

import { loadCartFromLocalStorage, saveCartToLocalStorage } from '@/lib/cart';
import { CartItem, CartState } from '@/types/cart';
import { createContext, useContext, useReducer, useEffect } from 'react';

type CartAction =
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'REMOVE_ITEM'; payload: string }
    | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
    | { type: 'CLEAR_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existingItem = state.items.find(item => item.productId === action.payload.productId);
            let newItems;

            if (existingItem) {
                newItems = state.items.map(item =>
                    item.productId === action.payload.productId
                        ? { ...item, quantity: item.quantity + action.payload.quantity }
                        : item
                );
            } else {
                newItems = [...state.items, action.payload];
            }

            const newState = {
                items: newItems,
                total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
            };
            saveCartToLocalStorage(newState);
            return newState;
        }
        case 'REMOVE_ITEM': {
            const newItems = state.items.filter(item => item.productId !== action.payload);
            const newState = {
                items: newItems,
                total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
            };
            saveCartToLocalStorage(newState);
            return newState;
        }
        case 'UPDATE_QUANTITY': {
            const newItems = state.items.map(item =>
                item.productId === action.payload.productId
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
            const newState = {
                items: newItems,
                total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
            };
            saveCartToLocalStorage(newState);
            return newState;
        }
        case 'CLEAR_CART':
            const newState = { items: [], total: 0 };
            saveCartToLocalStorage(newState);
            return newState;
        default:
            return state;
    }
};

interface CartContextType {
    cart: CartState;
    addItem: (item: CartItem) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

    useEffect(() => {
        const savedCart = loadCartFromLocalStorage();
        if (savedCart.items.length > 0) {
            savedCart.items.forEach(item => {
                dispatch({ type: 'ADD_ITEM', payload: item });
            });
        }
    }, []);

    const addItem = (item: CartItem) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    const removeItem = (productId: string) => {
        dispatch({ type: 'REMOVE_ITEM', payload: productId });
    };

    const updateQuantity = (productId: string, quantity: number) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};