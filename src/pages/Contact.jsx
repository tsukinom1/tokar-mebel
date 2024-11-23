import MethodList from "../components/contact/method/MethodList.jsx";
import Advice from "../components/contact/advice/Advice.jsx";
import Map from "../components/contact/map/Map.jsx";
import Requesites from "../components/contact/requesites/Requesites.jsx";
import '../styles/Contact.css'

const Contact = () => {
    return (
        <div className="contact mt-3">
            <div className="container">
                <div className="content row">
                    <div className="col-xl-6 col-lg-6 col-md-12 ">
                        <MethodList/>
                    </div>
                    <div className="mapvice col-xl-6 col-lg-6 col-md-12 " >
                        <Advice className="col-lg-12  col-md-8 mx-auto mt-3"/>
                        <Map className="map"/>
                    </div>
                </div>
                <Requesites/>
            </div>

        </div>
    );
};

export default Contact;