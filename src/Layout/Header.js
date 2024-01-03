import HeaderButton from "./HeaderButton";
import classes from "./Header.module.css";

const Header = (props) => {
    const openCartHandler = () => {
        props.openCartHandler(true);
    };
    return (
        <>
            <header className='header'>
                <div className='title'>Your Title</div>
                <HeaderButton openCartHandler={openCartHandler} />
            </header>
        </>
    );
};
export default Header;
