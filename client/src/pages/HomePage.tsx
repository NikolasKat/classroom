import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function HomePage() {
    return (
        <section className="pb-11 ">
            <Header />
            <Outlet />
        </section>
    );
}
