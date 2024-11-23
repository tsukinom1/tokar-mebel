// eslint-disable-next-line react/prop-types
const Method = ({ title, src, alt, array }) => {
    return (
        <div className="my-5">
            <h6 className="fw-bold">{title}</h6>
            <div className="my-3 d-flex justify-content-between align-items-center px-3">
                <div className="d-flex flex-column w-75">
                    {/* eslint-disable-next-line react/prop-types */}
                    {array.map((item, i) => (
                        <div key={i} className="d-flex align-items-end mb-2">
                            <p className=" text m-0 me-3">{item.label}</p>
                            <a
                                className="text text-dark m-0 text-decoration-none fw-medium"
                                href={item.href}
                            >
                                {item.link}
                            </a>
                        </div>
                    ))}
                </div>
                <div>
                    <img className="img" src={src} alt={alt} />
                </div>
            </div>
        </div>
    );
};

export default Method;
