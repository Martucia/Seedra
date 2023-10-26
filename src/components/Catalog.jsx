import f1 from "../images/f1.svg"
import f2 from "../images/f2.svg"
import f3 from "../images/f3.svg"
import f4 from "../images/f4.svg"
import f5 from "../images/f5.svg"
import f6 from "../images/f6.svg"
import f7 from "../images/f7.svg"
import ProductCart from "./ProductCart"

const Catalog = () => {
    return (
        <main className="catalog">
            <div className="catalog__header">
                <h2>
                    Our products.
                </h2>
                <button>
                    View all (12)
                </button>
            </div>
            <div className="catalog__filter">
                <button>
                    <img src={f1} alt="" />
                    <span>ALL</span>
                </button>
                <button>
                    <img src={f2} alt="" />
                    <span>BUNDLES</span>
                </button>
                <button>
                    <img src={f3} alt="" />
                    <span>HERBS</span>
                </button>
                <button>
                    <img src={f4} alt="" />
                    <span>VEGETABLES</span>
                </button>
                <button>
                    <img src={f5} alt="" />
                    <span>FRUITS</span>
                </button>
                <button>
                    <img src={f6} alt="" />
                    <span>SUPPLIES</span>
                </button>
                <button>
                    <img src={f7} alt="" />
                    <span>FLOWERS</span>
                </button>
            </div>
            <div className="catalog__wrapper">
                <ProductCart liked={true} />
                <ProductCart liked={false}  isFire={true} />
                <ProductCart liked={false} />
                <ProductCart liked={true} />
                <ProductCart liked={true} />
                <ProductCart liked={false} />
            </div>
        </main>
    );
}

export default Catalog;