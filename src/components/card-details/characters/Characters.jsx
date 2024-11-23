import clock from '../../../assets/work-process/clock.png'
import './Characters.css'
// eslint-disable-next-line react/prop-types
const Characters = ({card, className}) => {
    return (
        <div className={`characters p-3 ${className}`}>
            <h2 className="my-3 fs-24 fw-bold ls-2">Характиристики:</h2>
            <div className="d-flex align-items-center mb-3">
                <img src={clock} alt="clock"/>
                <div className="time-wrapper ms-3 d-flex align-items-center">
                    <p className="fs-18 m-0 lh-1">Сроки строительства:</p>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="item fw-bold fs-24 m-0 ms-2 lh-1">{card.time} дней</p>
                </div>
            </div>
            <div className="d-flex">
                <div>
                    <p className="fs-18 ls-2">Проект:
                        {/* eslint-disable-next-line react/prop-types */}
                        <span className="item fw-bold ms-3">{card.project}</span>
                    </p>
                    <p className="fs-18 ls-2">Стиль:
                        {/* eslint-disable-next-line react/prop-types */}
                        <span className="item fw-bold ms-3">{card.style}</span>
                    </p>
                    <p className="fs-18 ls-2">Фундамент:
                        {/* eslint-disable-next-line react/prop-types */}
                        <span className="item fw-bold ms-3">{card.foundation}</span>
                    </p>
                    <p className="fs-18 ls-2">Утепление стен:
                        {/* eslint-disable-next-line react/prop-types */}
                        <span className="item fw-bold  ms-3">{card.wallInsulation}</span>
                    </p>
                    <p className="fs-18 ls-2">Кровля:
                        {/* eslint-disable-next-line react/prop-types */}
                        <span className="item fw-bold  ms-3">{card.roofing}</span>
                    </p>
                    <p className="fs-18 ls-2">Окна:
                        {/* eslint-disable-next-line react/prop-types */}
                        <span className="item fw-bold  ms-3">{card.windows}</span>
                    </p>
                    <p className="fs-18 ls-2">Отделка фасада:
                        {/* eslint-disable-next-line react/prop-types */}
                        <span className="item fw-bold  ms-3">{card.facadeFinishing}</span>
                    </p>
                    <p className="fs-18 ls-2">Наружная покрастка:
                        {/* eslint-disable-next-line react/prop-types */}
                        <span className="item fw-bold ms-3">{card.exteriorPaint}</span>
                    </p>
                    <p className="fs-18 ls-2">Чистовая отделка:
                        {/* eslint-disable-next-line react/prop-types */}
                        <span className="item fw-bold ms-3">{card.interiorFinish}</span>
                    </p>
                    <p className="fs-18 ls-2">Отденлка парной:
                        {/* eslint-disable-next-line react/prop-types */}
                        <span className="item fw-bold ms-3">{card.saunaFinish}</span>
                    </p>
                    <p className="fs-18 ls-2">Печь:
                        {/* eslint-disable-next-line react/prop-types */}
                        <span className="item fw-bold ms-3">{card.stove}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Characters;