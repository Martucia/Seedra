import bl1 from "../images/bl1.png"
import bl2 from "../images/bl2.png"
import bl3 from "../images/bl3.png"
import Oclock from "../images/oclock.svg"
import { NavLink } from 'react-router-dom';

const OurBlog = () => {
    return (
        <main className="our_blog">
            <div className="our_blog__header">
                <h2>
                    Our blog.
                </h2>
                <button>
                    Go to our blog
                </button>
            </div>
            <div className="our_blog__wrapper">
                <div className="block">
                    <div className="block__text">
                        <div className="time">
                            <img src={Oclock} alt="" />
                            <span>
                                12.09.2021
                            </span>
                        </div>
                        <h3>
                            How to plant spinach correctly in winter
                        </h3>
                        <p>
                            In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...
                        </p>
                        <NavLink to="/">
                            Read
                        </NavLink>
                    </div>
                    <div className="block__img">
                        <img src={bl1} alt="" />
                    </div>
                </div>
                <div className="block">
                    <div className="block__text">
                        <div className="time">
                            <img src={Oclock} alt="" />
                            <span>
                                12.09.2021
                            </span>
                        </div>
                        <h3>
                            How to plant spinach correctly in winter
                        </h3>
                        <p>
                            In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...
                        </p>
                        <NavLink to="/">
                            Read
                        </NavLink>
                    </div>
                    <div className="block__img">
                        <img src={bl2} alt="" />
                    </div>
                </div>
                <div className="block">
                    <div className="block__text">
                        <div className="time">
                            <img src={Oclock} alt="" />
                            <span>
                                12.09.2021
                            </span>
                        </div>
                        <h3>
                            How to plant spinach correctly in winter
                        </h3>
                        <p>
                            In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...
                        </p>
                        <NavLink to="/">
                            Read
                        </NavLink>
                    </div>
                    <div className="block__img">
                        <img src={bl2} alt="" />
                    </div>
                </div>
                <div className="block">
                    <div className="block__text">
                        <div className="time">
                            <img src={Oclock} alt="" />
                            <span>
                                12.09.2021
                            </span>
                        </div>
                        <h3>
                            How to plant spinach correctly in winter
                        </h3>
                        <p>
                            In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...
                        </p>
                        <NavLink to="/">
                            Read
                        </NavLink>
                    </div>
                    <div className="block__img">
                        <img src={bl3} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default OurBlog;