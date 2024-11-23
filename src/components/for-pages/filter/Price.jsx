import {useState} from "react";

// eslint-disable-next-line react/prop-types
const Price = ({ min, max, onPriceChange }) => {
    const [price, setPrice] = useState(max);

    const handlePriceChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setPrice(value);
        onPriceChange(value);
    };

    return (
        <div>
            <label htmlFor="priceRange" className="fs-18">Цена (грн): <br/>  <p className="mt-1">{price}</p></label>
            <input
                type="range"
                id="priceRange"
                min={min}
                max={max}
                value={price}
                onChange={handlePriceChange}
            />
        </div>
    );
};

export default Price;
