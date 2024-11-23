import MyButton from "../../ui/MyButton.jsx";
import './DevProject.css'

import devProject from "../../../assets/resedential/dev-project.jpg";
const DevProject = () => {
    return (
        <div className="dev-project row">
            <div className="dev-project-text col-sm-6 col-12">
                <h4 className="">Нет подходящего проекта?</h4>
                <p className="">Мы разработаем проект индивидуально под ваш запрос с помощью 3D-макета</p>
                <MyButton className="main-btn dev-btn">Разработать проект</MyButton>
            </div>
            <div className="col-sm-6 col-12">
                <img className="w-100" src={devProject} alt="develop project"/>
            </div>
        </div>
    );
};

export default DevProject;