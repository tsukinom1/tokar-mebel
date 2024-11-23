import Method from './Method.jsx';
import methods from './Methods.js';
import './Method.css'

const MethodList = () => {
    return (
        <div className="method-list">
            <h6 className="fs-24 my-5">
                Связаться с компанией TokarMebel вы сможете с помощью одного из этих способов:
            </h6>
            {methods.map((method, index) => (
                <Method
                    key={index}
                    array={method.array} // Передаём только массив для текущего метода
                    title={method.title}
                    src={method.src}
                    alt={method.alt}
                />
            ))}
        </div>
    );
};

export default MethodList;
