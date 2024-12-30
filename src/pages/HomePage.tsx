import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function HomePage() {
    return (
        <section>
            <Header />
            <Outlet />
        </section>
    );
}
