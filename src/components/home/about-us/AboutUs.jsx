import './AboutUs.css'
import director from '../../../assets/home/director.png'
import phrase from '../../../assets/home/phrase.svg'
import MyButton from "../../ui/MyButton.jsx";
import {Link} from "react-router-dom";

const AboutUs = () => {
    const stats = [
        {title: `21 год`, text: `Работаем на рынке Украины с 1998 года`},
        {title: `300+`, text: `Позиций различных строений`},
        {title: `до 7%`, text: `Влажность просушенного дерева, что соответствует нормативам ГОСТ`},
        {title: `в 1,5 раза`, text: `Стоимость доставки ниже рыночной`},

    ]
    return (
        <div>
            <h2 className="my-5 fs-36">О компании TokarMebel</h2>
            <div className="position-relative back mb-5">
                <img className="d-block mx-auto director" src={director} alt="director"/>
                <div className="d-flex justify-content-between col-xl-6 col-md-8 col-sm-11 mx-auto overlay-card">
                    <img className="phrase col-1" src={phrase} alt="phrase"/>
                    <div className="overlay-content col-11 ps-3">
                        <p className="name lh-30 mt-0 fs-24">Точилов Александр Николаевич</p>
                        <p className="phrase-text mt-0">Наша корпорация — это не просто бизнес, это команда
                            единомышленников, которая стремится изменить мир к лучшему. Мы ставим амбициозные цели,
                            идем к ним с уверенностью.</p>

                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-between align-items-start mt-5">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card col-lg-3 col-md-6 col-sm-12 p-1">
                        <p className="fs-36 mb-1 t-orange">{stat.title}</p>
                        <hr className="line"/>
                        <p className="fs-16 mb-1 lh-30">{stat.text}</p>
                    </div>
                ))}
            </div>
            <MyButton className="my-3 d-block  main-btn p-3 mx-auto">
                <Link className="ps-3 text-decoration-none text-white" to="resedential">Перейти в каталог домов</Link>
            </MyButton>
        </div>
    );
};

export default AboutUs;