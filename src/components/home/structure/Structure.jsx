import './Structure.css'
import maket from "../../../assets/home/maket.svg";
import fundament from "../../../assets/home/fundament.svg";
import constructor from "../../../assets/home/constructor.svg";
import montaj from "../../../assets/home/montaj.png";
import structure from "../../../assets/home/structure.png";
import MyButton from "../../ui/MyButton.jsx";
import {Link} from "react-router-dom";

const Structure = () => {
    const structures = [
        {
            src: maket, title: `Создание 3D-макета`,
            text: `Это визуализация строения через экран гаджета. Макет создается индивидуально
             для клиента. Главная задача 3D-визуализации: учесть все детали в разработке и показать
             конечный вид проекта в оригинальном цвете и размере, используя актуальные материалы и
             наполнение внутри.`

        },
        {
            src: fundament, title: `Взятие замеров и создание фундамента.`,
            text: `Мы выезжаем на объект, обсуждаем задачу, выявляем потребность клиента 
            и берем замеры. Строим несущую конструкцию, которая выдержит нагрузку от здания и 
            погодных условий. Профессионалы используют лазерный уровень и качественные материалы, 
            чтобы фундамент получился максимально крепким и ровным.`,
        },
        {
            src: constructor, title: `Производство конструкции`,
            text: `На одном из 4 заводов по всей территории Украины мы производим конструкцию по 
            техническому заданию. Задание создается и согласуется с вами через прописанный договор в 
            начале работ.`,

        },
        {
            src: montaj, title: `Монтажные работы`,
            text: `Выполним полный объем работ: от возведения фундамента до устройства кровли. В
            конечном итоге, можно будет сразу использовать строение, а не докупать материал на 
            собственные деньги. Проведем сантехнические работы до полной сдачи проекта.`
        }
    ]
    return (
        <div className="mt-5">
            <div className=" ps-5 mb-5">
                <h2 className="fs-36 fw-bold"> Из чего состоят наши строения?</h2>
                <div className="row d-flex align-items-start">
                    {structures.map((item, index) => (
                        <div key={index} className="mt-5 px-3 pt-1 col-lg-6 col-md-12">
                            <div className="structure-content col-12">
                                <p className="lh-30 mt-0 fs-24">{item.title}</p>
                                <img className="structure-img" src={item.src} alt={item.title}/>
                            </div>
                            <p className="col-12  mt-0 s-text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="">
                <img className="mt-5 col-12" src={structure} alt="structure"/>
                <MyButton className="m-3 ms-0  main-btn p-3">
                    <Link className="ps-3 text-decoration-none  text-white" to="resedential">Перейти в каталог домов</Link>
                </MyButton>
            </div>
        </div>
    );
};

export default Structure;