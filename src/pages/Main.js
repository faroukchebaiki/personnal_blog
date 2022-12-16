import Aside from "../Components/Aside";
import Blogs from "../Components/Blogs";
export default function Main() {
    return (
        <section className="main">
            <Aside />
            <Blogs />
        </section>
    );
}