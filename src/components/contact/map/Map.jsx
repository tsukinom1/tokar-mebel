import map from '../../../assets/contact/map.jpg'
// eslint-disable-next-line no-unused-vars
const Map = ({className}) => {
    return (
        <div className="ps-2">
            <a className="mx-auto" href="#"><img className="map w-100 " src={map} alt="map"/></a>
        </div>
    );
};

export default Map;