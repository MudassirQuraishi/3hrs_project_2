import HeaderButton from "./HeaderButton";
import classes from "./Header.module.css";

const Header = (props) => {
    const openCartHandler = () => {
        props.openCartHandler(true);
    };
    return (
        <>
            <header className={classes.header}>
                <div className={classes.title}>Quraishi's Medical</div>
                <HeaderButton openCartHandler={openCartHandler} />
            </header>
        </>
    );
};
export default Header;
