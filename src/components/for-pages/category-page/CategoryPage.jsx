import {useState, useEffect} from "react";
import Filter from "../filter/Filter.jsx";
import CardList from "../card/CardList.jsx";
import DevProject from "../dev-project/DevProject.jsx";
import './CategoryPage.css'


// eslint-disable-next-line react/prop-types
const CategoryPage = ({cards, categories}) => {
    const [selectedCategory, setSelectedCategory] = useState('Все');
    const [filteredCards, setFilteredCards] = useState(cards);
    const [sortOrder, setSortOrder] = useState('default');
    const [price, setPrice] = useState(3500000);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSortChange = (sort) => {
        setSortOrder(sort);
    };

    const handlePriceChange = (priceValue) => {
        setPrice(priceValue);
    };

    // Фильтрация и сортировка карточек
    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        let updatedCards = cards.filter((card) => {
            return selectedCategory === 'Все' || card.type === selectedCategory;
        });
        updatedCards = updatedCards.filter((card) => card.price <= price);

        // Сортировка карточек
        if (sortOrder === 'alphabet') {
            updatedCards = updatedCards.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOrder === 'priceLowToHigh') {
            updatedCards = updatedCards.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'priceHighToLow') {
            updatedCards = updatedCards.sort((a, b) => b.price - a.price);
        }

        setFilteredCards(updatedCards);
    }, [selectedCategory, sortOrder, price, cards]);

    return (
        <div className="category-page">
            <div className="container">
                <div className="content col-12">
                    <Filter
                        className="col-lg-3 col-md-12"
                        onCategoryChange={handleCategoryChange}
                        onSortChange={handleSortChange}
                        onPriceChange={handlePriceChange}
                        categories={categories}
                    />
                    <div className="col-lg-9 col-md-12">
                        {filteredCards.length === 0 ? (
                            <div className="no-projects-message px-3">
                                <h2>Oops, В данных момент нет подходящих проектов</h2>
                                <h4>Попробуйте выбрать другой проект или попробуйте позже</h4>
                            </div>
                        ) : (
                            <CardList array={filteredCards}/>
                        )}
                    </div>
                </div>
                <DevProject/>
            </div>
        </div>
    );
};

export default CategoryPage;
