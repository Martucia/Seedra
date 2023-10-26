import Logo from "../../images/logo.svg"
import Inst from "../../images/inst.svg"
import Fb from "../../images/facebook.svg"
import Cart from "../../images/cart.svg"
import Heart from "../../images/heart.svg"
import Menu from "../../images/Menu.svg"
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__inner__logo">
                    <NavLink to="/">
                        <img src={Logo} alt="" />
                    </NavLink>
                </div>
                <div className="header__inner__nav">
                    <NavLink to="/">
                        ALL PRODUCTS
                    </NavLink>
                    <NavLink to="/">
                        ABOUT SEEDRA
                    </NavLink>
                    <NavLink to="/">
                        OUR BLOG
                    </NavLink>
                    <NavLink to="/">
                        CONTACTS
                    </NavLink>
                </div>
                <div className="header__inner__functional">
                    <div className="header__inner__functional__inner">
                        <a href="google.com"><img src={Inst} alt="" /></a>
                        <a href="google.com"><img src={Fb} alt="" /></a>
                    </div>
                    <input type="search" placeholder="Search" />
                    <div className="header__inner__functional__btns">
                        <NavLink to="/">
                            <img src={Heart} alt="" />
                        </NavLink>
                        <NavLink to="/">
                            <img src={Cart} alt="" />
                        </NavLink>
                    </div>
                    <div className="mobile-menu">
                        <button>
                            <img src={Menu} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;