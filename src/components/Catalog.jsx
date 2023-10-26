import f1 from "../assets/f1.svg"
import f2 from "../assets/f2.svg"
import f3 from "../assets/f3.svg"
import f4 from "../assets/f4.svg"
import f5 from "../assets/f5.svg"
import f6 from "../assets/f6.svg"
import f7 from "../assets/f7.svg"
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