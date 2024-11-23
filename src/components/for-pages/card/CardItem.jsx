import MyButton from "../../ui/MyButton.jsx";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CardItem = ({ id, src, title, areaSrc, area, price }) => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        if (id) {
            navigate(`/card/${id}`); // Переход с ID
        } else {
            console.error("ID не найден!");
        }
    };

    return (
        <div className="card-wrapper col-lg-4 col-sm-6 col-12 my-3">
            <img className="card-img" src={src} alt={title} />
            <h4 className="card-title fs-18 px-2 mt-3">{title}</h4>
            <div className="d-flex justify-content-start align-items-center px-2 my-2">
                <img className="card-area-img" src={areaSrc} alt="area" />
                <p className="card-area-text m-0 ms-2">{area} м²</p>
            </div>
            <div className="card-button-wrapper px-2">
                <MyButton className="main-btn p-2" onClick={handleButtonClick}>Ознакомиться</MyButton>
                <h6 className="card-price fs-18 m-0">{price} грн</h6>
            </div>
        </div>
    );
};
export default CardItem
