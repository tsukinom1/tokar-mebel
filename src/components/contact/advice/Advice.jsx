import {Form, FormText} from "react-bootstrap";
import MyButton from "../../ui/MyButton.jsx";
import './Advice.css'

// eslint-disable-next-line react/prop-types
const Advice = ({className}) => {
    return (
        <div className={`advice ${className}`}>
            <Form className="p-5 w-100 mx-auto p-3">
                <FormText className="title fw-bold text-dark lh-1 mb-2">Закажите консультацию, если сомневаетесь</FormText>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className="p-2 my-2" type="text" placeholder="Введите имя" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className="p-2 my-2" type="number" placeholder="+38 XXX XXX XX XX" />
                    <Form.Text className="text-muted lh-1">
                        Мы никогда не будем делиться вашими данными с кем-либо еще.
                    </Form.Text>
                </Form.Group>
                <MyButton className="main-btn w-100 p-3 mb-2">Получить точный расчет</MyButton>
                <FormText className="text-dark lh-1">Отправляя данные, Вы соглашаетесь на обработку <a className="t-orange text-decoration-none" href="#">персональных данных</a></FormText>
            </Form>
        </div>
    );
};

export default Advice;