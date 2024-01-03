import { createContext, useState } from "react";

const MedicineContext = createContext({
    medicines: [],
    addMedicine: () => {},
});

export const MedicineProvider = (props) => {
    const [medicines, setMedicines] = useState([]);

    const addMedicineHandler = (data) => {
        setMedicines((prevMedicines) => {
            return [...prevMedicines, data];
        });
    };
    const medicineContext = {
        medicines: medicines,
        addMedicine: addMedicineHandler,
    };
    return (
        <MedicineContext.Provider value={medicineContext}>
            {props.children}
        </MedicineContext.Provider>
    );
};

export default MedicineContext;
