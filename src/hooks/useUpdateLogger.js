import React, { useEffect } from "react";
//learning custom hooks;
export default function useUdateLogger(value){
    useEffect(()=>{
        console.log(value);
    },[value])
};