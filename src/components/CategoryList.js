import CategoryItem from "./CategoryItem";


const CategoryList = ({ dataCategoryList, handleClickCategoryList }) => {
    return (
        <nav className="catalog">
            {dataCategoryList && dataCategoryList.map((category, index) => <CategoryItem key={index} handleClickCategoryList={handleClickCategoryList} {...category} />)}
        </nav>
    )
}

export default CategoryList