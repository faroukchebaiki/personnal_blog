import Aside from "./Aside";
import Blogs from "./Blogs";
export default function Main() {
    return (
        <section className="main">
            <Aside />
            <Blogs />
        </section>
    );
}