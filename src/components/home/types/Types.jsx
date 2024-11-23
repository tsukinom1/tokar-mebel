import './Types.css'
import resedentialType from "../../../assets/home/resedential-type.png";
import commercialType from "../../../assets/home/commercial-type.png";
import gardenType from "../../../assets/home/garden-type.png";

const Types = () => {
    const types = [
        {
            src: resedentialType, title: 'Жилые строения',
            options: [
                'Дома из профилированого бруса',
                'Дома из оцилиндрованого бруса',
                'Каркасные дома',
                'Дома из блока'
            ]
        },
        {
            src: commercialType, title: 'Коммерческие',
            options: [
                'Базы отдыха',
                'Гостинницы',
                'Рестораны',
                'Кафе',
                'Магазины',]
        },
        {
            src: gardenType, title: 'Жилые строения',
            options: [
                'Деревянные бани',
                'Беседки',
                'Альтанки',
                'Детские игровые площадки',
                'Гаражи',
                'Деревянные детские домики',
                'Мангальные зоны и барбекю',
                'Кухни'
            ]
        },
    ]
    return (
        <div className="mt-5">
            <h2>Мы разделяем 3 вида строений</h2>
            <div className="row d-flex align-items-start">
                {types.map((type, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <img className="type-img" src={type.src} alt={type.title}/>
                        <h6 className="type-title fs-30 mt-3 mb-2">{type.title}</h6>
                        <select className="form-select" aria-label="Default select example">
                            {type.options.map((option, optIndex) => (
                                <option className="option" key={optIndex} value={option}>
                                    {"\u203A"} {option}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Types;