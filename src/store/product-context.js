import { createContext, useState } from "react";

const MedicineContext = createContext({
    medicines: [],
    addMedicine: () => {},
    decreaseQuantity: () => {},
});

export const MedicineProvider = (props) => {
    const [medicines, setMedicines] = useState([]);

    const addMedicineHandler = (data) => {
        setMedicines((prevMedicines) => {
            return [...prevMedicines, data];
        });
    };
    const decreaseQuantityHandler = (id, quantity) => {
        setMedicines((prevItems) => {
            const updatedItems = prevItems
                .map((item) => {
                    if (item.id === id) {
                        const updatedQuantity = item.quantity - quantity;
                        const newQuantity = Math.max(updatedQuantity, 0);
                        if (newQuantity === 0) {
                            return null;
                        }
                        return {
                            ...item,
                            quantity: newQuantity,
                        };
                    }
                    return item;
                })
                .filter(Boolean);
            return updatedItems;
        });
    };

    const medicineContext = {
        medicines: medicines,
        addMedicine: addMedicineHandler,
        decreaseQuantity: decreaseQuantityHandler,
    };
    return (
        <MedicineContext.Provider value={medicineContext}>
            {props.children}
        </MedicineContext.Provider>
    );
};

export default MedicineContext;
