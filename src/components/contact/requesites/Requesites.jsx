import check from '../../../assets/contact/check.png'
const Requesites = () => {
    const requesites = [
        { text: `Наименование компании:`,  name: `Tokar Mebel`},
        { text: `КПП:`,  name: `644901001`},
        { text: `БИК:`,  name: `046526969`},
        { text: `Юридический адрес:`,  name: ` г. Тячев, ТЦ "Стиль"`},
        { text: `ИНН:`,  name: `027811001`},
        { text: `Корреспондентский счет:`,  name: `30101810600002500957`},
        { text: `Регистрационный номер:`,  name: `02428896`},
        { text: `Расчетный счет:`,  name: `40602810206000050025`},
    ]
    return (
        <div className="my-5">
            <h4 className="pt-3">Реквизиты компании:</h4>
            <div className="row">
                {requesites.map((item, i) => (
                    <div key={i} className="col-12 col-md-6 col-lg-4  d-flex align-items-center mb-4">
                        <img className="p-3 col-2 img-fluid" src={check} alt="check"/>
                        <div className="col-10">
                            <p className="m-0">{item.text}</p>
                            <h6>{item.name}</h6>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Requesites;