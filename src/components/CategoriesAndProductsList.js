import { useRef, useState } from 'react';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import dataCategoryList from '../utils/categories'
import useFilterProducts from '../hooks/useFilterProducts';

const CategoriesAndProductsList = () => {
    const { productsList, handleChange } = useFilterProducts()
    const [stateTitleCurrentCategory, setStateTitleCurrentCategory] = useState('')
    const refTitleCurrentCategory = useRef()

    function handleClickCategoryList (title = '') {
        handleChange('type', title)
        setStateTitleCurrentCategory(title)
        refTitleCurrentCategory.current.scrollIntoView({ block: "start", inline: "start", behavior: "smooth" });
    }

    return (
        <>
            <h2 className="products__title" id="catalog" style={{ fontSize: 22 }}>
                Выберите категорию:
            </h2>
            <CategoryList dataCategoryList={dataCategoryList} handleClickCategoryList={handleClickCategoryList} setCurrentCategory={setStateTitleCurrentCategory} />
            <section className="products">
                <h2 ref={refTitleCurrentCategory} className="products__title" id="filter-products-title">{stateTitleCurrentCategory}</h2>
                <ProductList arrayCurrentCategory={productsList} />
            </section>
        </>
    )
}

export default CategoriesAndProductsList