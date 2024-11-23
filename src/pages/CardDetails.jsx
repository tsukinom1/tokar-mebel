import {useParams} from "react-router-dom";
import resCards from "../components/for-pages/card/resCards.js";
import comCards from "../components/for-pages/card/comCards.js";
import garCards from "../components/for-pages/card/garCards.js";
import WorkProcess from "../components/card-details/work-process/WorkProcess.jsx";
import Advice from "../components/contact/advice/Advice.jsx";
import DetailInfo from "../components/card-details/detail-info/DetailInfo.jsx";
import DetailCard from "../components/card-details/detail-card/DetailCard.jsx";
import Characters from "../components/card-details/characters/Characters.jsx";

const CardDetails = () => {
    const {id} = useParams();
    if (!id) {
        return <h2 className="text-center fw-bold fs-36">Проект не доступен</h2>;
    }
    const findCardById = (id) => {
        return [
            ...resCards,
            ...comCards,
            ...garCards
        ].find((item) => item.id === id);
    };

    const card = findCardById(id);

    if (!card) {
        return <h2 className="text-center fw-bold fs-36">Проект не найден</h2>;
    }

    return (
        <div className="card-details">
            <div className="container">
                <DetailInfo images={card.images}/>
                <DetailCard card={card}/>
                <div className="row p-3 align-items-center">
                    <Characters card={card} className="col-lg-6 col-md-12 col-sm-12"/>
                    <Advice className='col-lg-6 col-md-8 col-sm-12 mx-auto'/>
                </div>
                <WorkProcess/>

            </div>
        </div>
    );
};

export default CardDetails;
