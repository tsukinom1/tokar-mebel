import resedential from '../../../assets/home/resedential.png'
import commercial from '../../../assets/home/commercial.png'
import garden from '../../../assets/home/garden.png'
import './ProjectCatalog.css'
import {Link} from "react-router-dom";

const ProjectCatalog = () => {
    const projectsCatalog = [
        {
            src: resedential, title: `Жилое`,
            text: `Раздел с домами, дачами, коттеджами, виллами, усадьбами и особняками`,
            href: `/resedential`
        },
        {
            src: commercial, title: `Коммерческое`,
            text: `Раздел с базами отдыха, гостиницами, ресторанами, кафе и магазинами`,
            href: `/commercial`
        },
        {
            src: garden, title: `Садовое`,
            text: `Раздел с банями, беседками, альтанками, гаражами, кухнями, площадками, мангальными зонами и барбекю`,
            href: `/garden`
        }
    ]
    return (
        <div className=" mt-5 ps-5 mb-5">
            <h2 className="fs-36 fw-bold">Каталог проектов</h2>
            <div className="custom-background row d-flex align-items-start"
            >
                <div className="row col-xl-6 col-lg-9 col-md-12 pt-3">
                    {projectsCatalog.map((item, index) => (
                        <div key={index} className={`bg-white ${index === 2 ? 'col-12' : 'col-6 mb-3 pb-3'}`}>
                            {index === 2 ? (
                                <div className=" d-flex mt-5 pt-1">
                                    <div className="col-6">
                                        <p className="ps-3 mt-0 fs-24">{item.title}</p>
                                        <p className="ps-3 mt-0 s-text">{item.text}</p>
                                        <Link className="ps-3 text-decoration-none t-orange" to={item.href}>Ознакомиться с проектами</Link>

                                    </div>
                                    <img className="ps-3 col-6" src={item.src} alt={item.title}/>
                                </div>
                            ) : (
                                <div>
                                    <img className="w-100 mt-3" src={item.src} alt={item.title}/>
                                    <p className="ps-3 mt-0 fs-24">{item.title}</p>
                                    <p className="ps-3 mt-0 s-text">{item.text}</p>
                                    <Link className="ps-3 text-decoration-none t-orange" to={item.href}>Ознакомиться с проектами</Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCatalog;