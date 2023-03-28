import { useEffect, useState } from "react"
import dataProductList from '../utils/dataProductList'

function useGetProductDataById (id) {
    const basic = { id: '', title: '', cost: '', description: '', weight: '', img: '', properties: '', type: '' };
    const [dataProduct, setDataProduct] = useState(basic)

    useEffect(() => {
        setDataProduct(dataProductList.find(item => item.id === parseInt(id, 10)))
    }, [id])
    return dataProduct;
}
export default useGetProductDataById;