import { createContext, useState } from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
});

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const addItemHandler = (item) => {
        setCartItems((prevItems) => {
            for (let prevItem of prevItems) {
                if (prevItem.id === item.id) {
                    prevItem.quantity += item.quantity;
                    const newCartList = [...prevItems];
                    return newCartList;
                }
            }
            const newCartList = [...prevItems, item];
            return newCartList;
        });
        setTotalAmount((prevAmount) => {
            return prevAmount + item.price;
        });
    };
    const increaseQuantityHandler = (updatedItem) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map((item) => {
                if (item.id === updatedItem.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });
            return updatedItems;
        });
        setTotalAmount((prevAmount) => {
            return prevAmount + updatedItem.price;
        });
    };
    // const decreaseQuantityHandler = (updatedItem) => {
    //     setCartItems((prevItems) => {
    //         const updatedItems = prevItems.map((item) => {
    //             if (item.id === updatedItem.id) {
    //                 return {
    //                     ...item,
    //                     quantity: item.quantity - 1,
    //                 };
    //             }
    //             return item;
    //         });
    //         return updatedItems;
    //     });
    //     setTotalAmount((prevAmount) => {
    //         return prevAmount - updatedItem.price;
    //     });
    // };
    const decreaseQuantityHandler = (updatedItem) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems
                .map((item) => {
                    if (item.id === updatedItem.id) {
                        if (item.quantity === 1) {
                            return null;
                        }
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    }
                    return item;
                })
                .filter(Boolean);
            return updatedItems;
        });
        setTotalAmount((prevAmount) => {
            return prevAmount - updatedItem.price;
        });
    };
    const cartContext = {
        items: cartItems,
        totalAmount: totalAmount,
        addItem: addItemHandler,
        increaseQuantity: increaseQuantityHandler,
        decreaseQuantity: decreaseQuantityHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;
