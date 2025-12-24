import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (!action.payload) return state; // 防止 null payload
      return {
        ...state,
        items: [...state.items, action.payload],
        deletedItems: state.deletedItems.filter(item => item.id !== action.payload.id)
      };
    case 'REMOVE_FROM_CART':
      const itemToRemove = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        deletedItems: itemToRemove ? [...state.deletedItems, itemToRemove] : state.deletedItems
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    case 'UPDATE_SIZE':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, size: action.payload.size }
            : item
        )
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        deletedItems: [...state.deletedItems, ...state.items]
      };
    case 'RESTORE_ITEM':
      const itemToRestore = state.deletedItems.find(item => item.id === action.payload);
      if (itemToRestore) {
        return {
          ...state,
          items: [...state.items, itemToRestore],
          deletedItems: state.deletedItems.filter(item => item.id !== action.payload)
        };
      }
      return state;
    case 'CLEAR_DELETED_HISTORY':
      return {
        ...state,
        deletedItems: []
      };
    case 'INITIALIZE_CART':
      return {
        ...state,
        items: action.payload.items || [],
        deletedItems: action.payload.deletedItems || []
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    deletedItems: []
  });

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        if (parsed.items || parsed.deletedItems) {
          dispatch({ 
            type: 'INITIALIZE_CART', 
            payload: { 
              items: parsed.items || [], 
              deletedItems: parsed.deletedItems || [] 
            } 
          });
        }
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify({
      items: state.items,
      deletedItems: state.deletedItems
    }));
  }, [state.items, state.deletedItems]);

  const addToCart = (product) => {
    if (!product) return;
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const updateSize = (productId, size) => {
    dispatch({ type: 'UPDATE_SIZE', payload: { id: productId, size } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const restoreItem = (productId) => {
    dispatch({ type: 'RESTORE_ITEM', payload: productId });
  };

  const clearDeletedHistory = () => {
    dispatch({ type: 'CLEAR_DELETED_HISTORY' });
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  const getDeletedItems = () => {
    return state.deletedItems;
  };

  return (
    <CartContext.Provider value={{
      cart: state.items,
      deletedItems: state.deletedItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      updateSize,
      clearCart,
      restoreItem,
      clearDeletedHistory,
      getCartTotal,
      getCartItemCount,
      getDeletedItems
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 