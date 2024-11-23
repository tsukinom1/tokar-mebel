import './DetailCard.css'
// eslint-disable-next-line react/prop-types
const DetailCard = ({card}) => {
    return (
        <div className="detail-card">
            <h2 className="fs-24 fw-bold ps-3">Краткое описание проекта:</h2>
            <div className="row d-flex align-items-center">
                <div className="col-lg-4 col-md-12">
                    {/* eslint-disable-next-line react/prop-types */}
                    <img className="w-100 p-3" src={card.src} alt={card.title}/>
                </div>
                <div className="detail-card-content col-lg-8 col-md-10 p-3">
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="title ls-2">{card.title}</p>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="text">{card.description}</p>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="text">Тип проекта: <span className="title ls-2">{card.type}</span></p>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="text">Площадь проекта: <span className="title ls-2">{card.area}</span> м²</p>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="text">Сроки строительство: <span className="title ls-2">{card.time}</span> дней</p>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="text">Цена проекта: <span className="title ls-2">{card.price}</span> грн</p>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;