import MiniBanner from "../MiniBanner";
import Banner from "../Banner";
import Catalog from "../Catalog";
import OurBlog from "../OurBlog";
import Info from "../Info";

const MainPage = () => {
    return (
        <>
            <Banner />
            <MiniBanner />
            <Catalog />
            <OurBlog />
            <Info />
        </>
    );
}

export default MainPage;