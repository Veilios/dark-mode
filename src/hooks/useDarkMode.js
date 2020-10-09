import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValues) => {
    const [values, setValues] = useLocalStorage(key, initialValues);

    const handleChanges = (e) => {
        alert("DarkMode On");
    };

    const toggleMode = e => {
        e.preventDefault();
        setValues(!values.darkMode);
      };


    return [handleChanges, values, toggleMode, setValues];

};

export default useDarkMode;