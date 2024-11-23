import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import Blog from "./Blog.jsx";
import blogs from "./Blogs.js";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Blog.css'

const BlogList = () => {

    return (
        <div>
            <h2 className="mt-5 fs-36">Последние статьи</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                breakpoints={{
                    // when window width is >= 640px
                    576: {
                        width: 576,
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },992: {
                        width: 992,
                        slidesPerView: 3,
                    },
                }}
            >
                {blogs.map(blog => (
                    // eslint-disable-next-line react/jsx-key
                    <SwiperSlide key={blog.id}>
                        <Blog  src={blog.src} title={blog.title} text={blog.text}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BlogList;