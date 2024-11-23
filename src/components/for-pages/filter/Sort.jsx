// eslint-disable-next-line react/prop-types
const SortFilter = ({onSort}) => {
    return (
        <div className="sort my-3">
            <h4 className="category-title">Сортировать по</h4>
            <select onChange={(e) => onSort(e.target.value)}
            className="form-select">
                <option value="default">По умолчанию</option>
                <option value="alphabet">Алфавиту</option>
                <option value="priceLowToHigh">Цена: от низкой к высокой</option>
                <option value="priceHighToLow">Цена: от высокой к низкой</option>
            </select>
        </div>
    );
};

export default SortFilter;
