import Fire from "../assets/fire.svg"
import BannerMain from "../assets/bmain.png"
import b1 from "../assets/b1.png"
import b2 from "../assets/b2.png"
import b3 from "../assets/b3.png"
import b4 from "../assets/b4.png"
import b5 from "../assets/b5.png"

const Banner = () => {
    return (
        <main className="banner">
            <div className="banner__inner">
                <div className="banner__inner__text">
                    <h1>
                        SEEDRA Basil Seeds for Indoor and Outdoor Planting
                    </h1>
                    <h4>
                        Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee
                    </h4>
                    <div className="price">
                        <img src={Fire} alt="" />
                        <div className="main_price">
                            $12.56
                        </div>
                        <div className="old_price">
                            $15.56
                        </div>
                    </div>
                    <div className="btns">
                        <button className="add">
                            Add to card
                        </button>
                        <button className="discover">
                            Discover
                        </button>
                    </div>
                </div>
                <div className="banner__inner__img">
                    <img src={BannerMain} alt="" />
                </div>
            </div>
            <img src={b1} className="banner_image b1" alt="" />
            <img src={b2} className="banner_image b2" alt="" />
            <img src={b3} className="banner_image b3" alt="" />
            <img src={b4} className="banner_image b4" alt="" />
            <img src={b5} className="banner_image b5" alt="" />
        </main>
    );
}

export default Banner;