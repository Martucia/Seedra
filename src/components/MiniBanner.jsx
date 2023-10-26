import Mb1 from "../assets/mb1.png"
import Mb2 from "../assets/mb2.png"
import Mb3 from "../assets/mb3.png"
import Mb4 from "../assets/mb4.png"
import Mb5 from "../assets/mb5.png"
import Mb6 from "../assets/mb6.png"
import Mb7 from "../assets/mb7.png"
import Mb8 from "../assets/mb8.png"


const MiniBanner = () => {
    return (
        <main className="mini_banner">
            <h2>
                We sell seeds
            </h2>
            <h4>
                that always sprout and gardening supplies which never break
            </h4>
            <img src={Mb1} className="mb1" alt="" />
            <img src={Mb2} className="mb2" alt="" />
            <img src={Mb3} className="mb3" alt="" />
            <img src={Mb4} className="mb4" alt="" />
            <img src={Mb5} className="mb5" alt="" />
            <img src={Mb6} className="mb6" alt="" />
            <img src={Mb7} className="mb7" alt="" />
            <img src={Mb8} className="mb8" alt="" />
        </main>
    );
}

export default MiniBanner;