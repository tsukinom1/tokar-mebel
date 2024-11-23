import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Thumbs } from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./DetailInfo.css";

// eslint-disable-next-line react/prop-types
const DetailInfo = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false); // Состояние для отслеживания ширины экрана
    const mainSwiperRef = useRef(null);
    const thumbSwiperRef = useRef(null);

    const adjustThumbHeight = () => {
        if (mainSwiperRef.current && thumbSwiperRef.current) {
            const mainHeight = mainSwiperRef.current.offsetHeight;
            const thumbSlides = thumbSwiperRef.current.querySelectorAll(".swiper-slide");
            const thumbHeight = mainHeight / 3; // Равномерно делим на 3 миниатюры

            thumbSlides.forEach((slide) => {
                slide.style.height = `${thumbHeight}px`; // Устанавливаем высоту для каждой миниатюры
            });
        }
    };

    // Хук для отслеживания ширины экрана
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 991); // Обновляем состояние при изменении размера экрана
        };

        handleResize(); // Сразу вызываем для начальной установки
        window.addEventListener("resize", handleResize); // Добавляем слушатель изменения размера экрана

        return () => window.removeEventListener("resize", handleResize); // Убираем слушатель при размонтировании
    }, []);

    useEffect(() => {
        adjustThumbHeight(); // Синхронизация при монтировании
        window.addEventListener("resize", adjustThumbHeight); // Слушаем изменение размера экрана
        return () => window.removeEventListener("resize", adjustThumbHeight); // Убираем слушатель
    }, []);

    if (!images || !Array.isArray(images)) {
        return <p className="text-center fw-bold fs-36">Изображения не найдены</p>;
    }

    return (
        <div className="detail-info-container row col-12">
            {/* Боковой слайдер миниатюр */}

            {/* Основной слайдер */}
            <Swiper
                ref={thumbSwiperRef}
                className={`thumb-swiper ${isSmallScreen ? 'my-3' : 'my-5'} col-lg-3 col-md-12 `}
                onSwiper={setThumbsSwiper}
                direction={isSmallScreen ? "horizontal" : "vertical"} // Меняем направление в зависимости от ширины экрана
                spaceBetween={10}
                slidesPerView={isSmallScreen ? 3 : 3} // Показываем 4 миниатюры на малых экранах, 3 на больших
                watchSlidesProgress
                modules={[Thumbs]}
            >
                {/* eslint-disable-next-line react/prop-types */}
                {images.map((image, i) => (
                    <SwiperSlide key={i}>
                        <img className="thumb-image" src={image} alt={`Thumbnail ${i}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                ref={mainSwiperRef}
                className={`main-swiper ${isSmallScreen ? 'my-3' : 'my-5'} col-lg-9 col-md-12`}
                modules={[Navigation, A11y, Thumbs]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                thumbs={{ swiper: thumbsSwiper }}
            >
                {/* eslint-disable-next-line react/prop-types */}
                {images.map((image, i) => (
                    <SwiperSlide key={i}>
                        <img className="main-image" src={image} alt={`Slide ${i}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DetailInfo;
