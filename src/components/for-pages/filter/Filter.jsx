import CategoryList from "../categories/CategoryList.jsx";
import './Filter.css'
import Sort from "./Sort.jsx";
import Price from "./Price.jsx";
// eslint-disable-next-line react/prop-types
const Filter = ({className, onCategoryChange, onSortChange, onPriceChange, categories}) => {
    return (
        <div className={`filter ${className}`}>
            <div className="filter-flex">
                <CategoryList onChange={onCategoryChange} title="Дома и жилые строения" categories={categories}/>
                <Sort onSort={onSortChange}/>
            </div>
            <Price onPriceChange={onPriceChange} min={500000} max={3500000}/>
        </div>
    );
};

export default Filter;