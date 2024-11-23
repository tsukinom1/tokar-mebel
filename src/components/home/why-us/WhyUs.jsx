import design from '../../../assets/home/design.svg'
import model from '../../../assets/home/model.svg'
import certificate from '../../../assets/home/certificate.svg'
import contract from '../../../assets/home/contract.svg'
import './WhyUs.css'
const WhyUs = () => {
    const reasons = [
        {src: design, title: `Эксклюзивный дизайн`, text: `Не имеющий аналогов в Украине`},
        {src: model, title: `Разработка модели`, text: ` Индивидуальной с помощью 3D-визуализации в нашем приложении`},
        {src: certificate, title: `Сертификаты качества`, text: `Подтверждают наши материалы и комплектующие`},
        {src: contract, title: `Работа под ключ`, text: `В среднем за Х дней от установки фундамента до сдачи объекта в эксплуатацию`}
    ]
    return (
        <div className="row mt-5 ps-5 mb-5">
            <h2 className="why-card col-12 fw-bolder mb-4">Почему выбирают нас:</h2>
            <div className="row d-flex align-items-start">
                {reasons.map((reason, index) => (
                    <div key={index} className="why-card col-lg-3 col-md-6 col-sm-12">
                        <img src={reason.src} alt={reason.title} />
                        <h6 className="mt-3 mb-2">{reason.title}</h6>
                        <p className="s-text">{reason.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyUs;
