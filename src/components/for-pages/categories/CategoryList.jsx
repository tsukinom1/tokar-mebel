// eslint-disable-next-line react/prop-types
const CategoryList = ({title, categories, onChange}) => {
    return (
        <div className="category-list mt-3">
            <h4 className="category-title">{title}</h4>

            {/* На мобильных устройствах будет отображаться Select, на больших экранах - радиокнопки */}
            <div className="category-radio">
                {/* eslint-disable-next-line react/prop-types */}
                {categories.map((category, index) => (
                    <div className="mt-1 ps-1" key={index}>
                        <input
                            className="me-2"
                            type="radio"
                            id={`category-${index}`}
                            name="category"
                            value={category}
                            onChange={(e) => onChange(e.target.value)}
                        />
                        <label className="label" htmlFor={`category-${index}`}>{category}</label>
                    </div>
                ))}
            </div>

            {/* Выпадающий список для мобильных */}
            <div className="category-select ">
                <select onChange={(e) => onChange(e.target.value)}
                        className="form-select w-50 m-0">
                    {/* eslint-disable-next-line react/prop-types */}
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default CategoryList;