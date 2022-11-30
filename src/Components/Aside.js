import Writer from "./Writer";
import Copyright from "./Copyright";
export default function Aside() {
    return (
        <aside className="left">
            <Writer />
            <Copyright />
        </aside>
    );
}