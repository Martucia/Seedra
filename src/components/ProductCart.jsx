import p1 from "../images/p1.png"
import { Rating } from '@mui/material';
import Cart from "../images/cart.svg"
import Heart from "../images/yellow-heart.svg"
import FullHeart from "../images/fullheart.svg"
import { NavLink } from 'react-router-dom';
import Fire from "../images/fire.svg"


const ProductCart = ({ liked, isFire }) => {
    return (
        <div className="product_cart">
            <div className="product_cart__image">
                <NavLink to="/">
                    <img src={p1} alt="" />
                </NavLink>
            </div>
            <div className="product_cart__rate">
                <Rating readOnly value="1.5" />
                <NavLink className="count" to="/">
                    (123)
                </NavLink>
            </div>
            <div className="product_cart__title">
                <NavLink to="/">
                    Seedra Cilantro Seeds for Planting Indoor and Outdoor
                </NavLink>
            </div>
            <div className="product_cart__footer">
                <div className="price">
                    {isFire ? <img src={Fire} alt="" /> : <></>}
                    <span>$12.56</span>
                </div>
                <button className="to_basket">
                    <img src={Cart} alt="" />
                </button>
            </div>
            <button className={liked ? "like_btn liked" : "like_btn"}>
                {liked ? <img src={FullHeart} alt="" /> : <img src={Heart} alt="" />}
            </button>
        </div>
    );
}

export default ProductCart;