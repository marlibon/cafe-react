
const CategoryItem = ({ image, title, handleClickCategoryList }) => {
    function handleClick (title) {
        handleClickCategoryList(title)
    }
    return (
        <div className="catalog__item" onClick={() => handleClick(title)}>
            <img
                src={image}
                alt={title}
                className="catalog__img"
            />
            <h3 className="catalog__item-title">{title}</h3>
        </div>
    )
}

export default CategoryItem