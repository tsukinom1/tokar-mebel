import './Blog.css'

// eslint-disable-next-line react/prop-types
const Blog = ({src, title, text}) => {
    return (
        <div className="blog-wrapper my-3">
            <img className="blog-img w-100" src={src} alt={title}/>
            <h6 className="blog-title mt-3 mb-2">{title}</h6>
            <p className="blog-text">{text}</p>
        </div>
    );
};

export default Blog;