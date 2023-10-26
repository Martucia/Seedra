import { NavLink } from 'react-router-dom';
import Logo from "../images/logo.svg"
import Inst from "../images/inst.svg"
import Fb from "../images/facebook.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__up">
                    <ul className='nav_left'>
                        <li>
                            <NavLink to="/">
                                ALL PRODUCTS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                ABOUT SEEDRA
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                OUR BLOG
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink className="logo" to="/">
                        <img src={Logo} alt="" />
                    </NavLink>
                    <ul className="nav_right">
                        <li>
                            <NavLink to="/">
                                Terms&Conditions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                Privacy Policy
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="footer__down">
                    <div className="social">
                        <NavLink to="/">
                            <img src={Inst} alt="" />
                        </NavLink>
                        <NavLink to="/">
                            <img src={Fb} alt="" />
                        </NavLink>
                    </div>
                    <p>
                        All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;