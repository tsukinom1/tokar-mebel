import Header from "./components/header/Header.jsx";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Contact from "./pages/Contact.jsx";
import CardDetails from "./pages/CardDetails.jsx";
import CategoryPage from "./components/for-pages/category-page/CategoryPage.jsx";

import resCards from "./components/for-pages/card/resCards.js";
import resCategories from "./components/for-pages/categories/ResCategories.js";
import comCards from "./components/for-pages/card/comCards.js";
import comCategories from "./components/for-pages/categories/ComCategories.js";
import garCategories from "./components/for-pages/categories/GarCategories.js";
import garCards from "./components/for-pages/card/garCards.js";

import './styles/App.css';
import {useEffect} from "react";

const ScrollToTop = () => {
    const location = useLocation();  // Получаем текущий путь

    useEffect(() => {
        window.scrollTo(0, 0);  // Прокручиваем страницу вверх
    }, [location]);  // Запускается каждый раз при изменении пути

    return null;
};

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/resedential"
                    element={<CategoryPage cards={resCards} categories={resCategories} />}
                />
                <Route
                    path="/commercial"
                    element={<CategoryPage cards={comCards} categories={comCategories} />}
                />
                <Route
                    path="/garden"
                    element={<CategoryPage cards={garCards} categories={garCategories} />}
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="/card/:id" element={<CardDetails />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
