import Aside from "../Components/Aside";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";

export default function Main() {
    return (
        <>
            <section className="main">
                <Aside />
                <Blogs />
            </section>
            <Footer />
        </>
    );
}