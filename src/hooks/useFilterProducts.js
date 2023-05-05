import { useEffect, useState } from 'react'
import dataProductList from '../utils/dataProductList'

function useFilterProducts (initialProperty = '', initialValue = '') {
    const [type, setType] = useState(initialProperty)
    const [value, setValue] = useState(initialValue)
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        const filteredProducts = dataProductList.filter((product) => product[type] === value);
        setProductsList(filteredProducts)
    }, [type, value])

    const handleFilter = (newType, newValue) => {
        setType(newType);
        setValue(newValue);
    }
    return { productsList, handleFilter };
}

export default useFilterProducts