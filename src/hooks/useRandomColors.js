import { useState } from "react"
//learning custom hooks
export default function useRandomColor(){
    //this return a hexadecimal number with # in front.
    const [color, setColor] = useState("");

    const changeColor = () => {
        setColor(`#${Math.random().toString(16).substring(-6)}`);
    };

    return [color, changeColor];
}