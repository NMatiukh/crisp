import {useState} from "react";

function usePlusAndMinus(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function plus() {
        setValue(value + 1)
    }
    function minus() {
        setValue(value - 1)
    }
    return [value, plus, minus]
}

export default usePlusAndMinus;