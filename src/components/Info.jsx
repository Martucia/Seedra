import i1 from "../images/i1.png"
import i2 from "../images/i2.png"

const Info = () => {
    return (
        <main className="info">
            <div className="info__inner">
                <div className="info__text">
                    <h2>
                        Seedra helps to grow fast and efficiant
                    </h2>
                    <p>
                        SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George
                    </p>
                    <p>
                        Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.
                    </p>
                    <p>
                        Your easy growing experience is our guarantee
                        Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more
                    </p>
                    <p>
                        Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product
                    </p>
                </div>
                <div className="info__img">
                    <img src={i1} alt="" />
                </div>
            </div>

            <img className="leaf" src={i2} alt="" />
        </main>
    );
}

export default Info;