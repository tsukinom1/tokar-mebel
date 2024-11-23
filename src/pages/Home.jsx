import Promo from "../components/home/promo/Promo.jsx";
import WhyUs from "../components/home/why-us/WhyUs.jsx";
import ProjectCatalog from "../components/home/project-catalog/ProjectCatalog.jsx";
import Structure from "../components/home/structure/Structure.jsx";
import AboutUs from "../components/home/about-us/AboutUs.jsx";
import Types from "../components/home/types/Types.jsx";
import BlogList from "../components/home/blog/BlogList.jsx";

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <Promo />
                <WhyUs />
                <ProjectCatalog />
                <Structure />
                <AboutUs />
                <Types />
                <BlogList />
            </div>
        </div>
    );
};

export default Home;