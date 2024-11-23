// eslint-disable-next-line react/prop-types
const MyButton = ({className, type, children, onClick}) => {
    return (
        <button className={`myBtn ${className}`} type={type} onClick={onClick}>{children}</button>
    );
};

export default MyButton;