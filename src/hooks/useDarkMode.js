import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValues) => {
    
    const [values, setValues] = useLocalStorage(key, initialValues);

    const handleChanges = (n) => {
        setValues(n);
    };

    return [handleChanges, values, setValues];

}; 

export default useDarkMode;