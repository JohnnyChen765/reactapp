import React, { useEffect } from 'react';
import './App.css';

const Child = () => {
    useEffect(() => {
        console.log("SHOULD NEVER APPEAR")
    }, [])
    return <></>
}

export default Child;
