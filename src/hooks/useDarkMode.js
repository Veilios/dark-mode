import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValues) => {
    const [values, setValues] = useLocalStorage(key, initialValues);

    const handleChanges = (e) => {
        alert("DarkMode On");
    };

    return [handleChanges, values, setValues];

};

export default useDarkMode;