import MyButton from "../../ui/MyButton.jsx";
import mainImg from "../../../assets/home/main.png";
import './Promo.css'
import {Link} from "react-router-dom";
const Promo = () => {
    return (
        <div className="row d-flex align-items-center mt-5 mb-5">
            <div className="promo-text col-lg-6 col-md-12">
                <h1 className="fw-bold lh-50">Производим и устанавливаем строения разных видов
                    в Украине</h1>
                <p className="lh-30">Индивидуально под ваш запрос построим дом, ресторан, баню,
                    беседку, мангал или любую другую постройку</p>
                <MyButton className="main-btn p-3">
                    <Link className="ps-3 text-decoration-none  text-white" to="/resedential">Перейти в каталог домов</Link>
                </MyButton>
            </div>
            <div className="col-lg-6 col-md-12">
                <img className="main-img" src={mainImg} alt="main-img"/>
            </div>
        </div>
    );
};

export default Promo;