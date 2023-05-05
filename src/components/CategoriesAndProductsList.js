import { useRef, useState } from 'react';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import useFilterProducts from '../hooks/useFilterProducts';
import Loading from './Loading';

const CategoriesAndProductsList = ({ dataCategoryList }) => {
    const { productsList, handleFilter } = useFilterProducts()
    const [titleCurrentCategory, setTitleCurrentCategory] = useState('')
    const refTitleCurrentCategory = useRef()

    function handleClickCategoryList (title = '') {
        handleFilter('type', title)
        setTitleCurrentCategory(title)
        refTitleCurrentCategory.current.scrollIntoView({ block: "start", inline: "start", behavior: "smooth" });
    }

    if (!dataCategoryList) return (<Loading />)
    return (
        <>
            <h2 className="products__title" id="catalog" style={{ fontSize: 22 }}>
                Выберите категорию:
            </h2>
            <CategoryList dataCategoryList={dataCategoryList} handleClickCategoryList={handleClickCategoryList} />
            <div ref={refTitleCurrentCategory}>
                <ProductList title={titleCurrentCategory} arrayProductsList={productsList} limit={999} />
            </div>
        </>
    )
}

export default CategoriesAndProductsList