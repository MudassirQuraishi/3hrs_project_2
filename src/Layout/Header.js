import HeaderButton from "./HeaderButton";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <>
            <header className='header'>
                <div className='title'>Your Title</div>
                <HeaderButton />
            </header>
        </>
    );
};
export default Header;
