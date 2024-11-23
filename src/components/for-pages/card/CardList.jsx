import CardItem from "./CardItem.jsx";
import './Card.css'

// eslint-disable-next-line react/prop-types
const CardList = ({array, className}) => {
    return (
        <div className={`card-list row ${className}`}>
            {/* eslint-disable-next-line react/prop-types */}
            {array.map(item => (
                <CardItem key={item.id}  src={item.src}
                          id={item.id}
                      title={item.title} areaSrc={item.areaSrc}
                      area={item.area} price={item.price}/>
            ))}
        </div>
    );
};

export default CardList;