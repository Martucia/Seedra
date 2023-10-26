import MiniBanner from "../components/MiniBanner";
import Banner from "../components/Banner";
import Catalog from "../components/Catalog";
import OurBlog from "../components/OurBlog";
import Info from "../components/Info";

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