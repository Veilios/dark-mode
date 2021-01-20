import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getIten(key);
        return item ? JSON.parse(item) : initialValue;
    });


};