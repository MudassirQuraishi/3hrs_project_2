import React, { forwardRef } from "react";
const Input = forwardRef((props, ref) => {
    return (
        <>
            <label htmlFor={props.id}>{props.label} : </label>
            <input
                ref={ref}
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                min={props.minValue}
                max={props.maxValue}
                required={props.isRequired}></input>
        </>
    );
});
export default Input;
