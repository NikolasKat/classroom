import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/userSlice";
import InfoALert from "./InfoALert";
import { useState } from "react";
import { AppDispatch } from "../store/store";

function Header() {
    const [isLHover, setIsLHover] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            <header className="flex justify-between items-center px-9 py-4 text-3xl font-medium bg-slate-100">
                <div className="flex items-center gap-9">
                    <Link
                        to="/"
                        className="transition duration-200 ease-in-out flex justify-items-start items-center gap-2 hover:text-gray-500"
                    >
                        <img
                            src="../../public/main_logo.svg"
                            alt="Home Page"
                            className="w-20"
                        />
                        <h2 className="text-6xl font-bold">Classroom</h2>
                    </Link>
                </div>

                <nav className="flex items-center gap-5 mt-4">
                    <ul className="flex items-center gap-5 text-2xl">
                        <li className="hover:text-gray-500">
                            <Link
                                to="myCourses"
                                className="transition duration-200 ease-in-out hover:text-gray-500"
                            >
                                Мои курсы
                            </Link>
                        </li>
                        <li className="hover:text-gray-500">
                            <Link
                                to="allCourses"
                                className="transition duration-200 ease-in-out hover:text-gray-500"
                            >
                                Все курсы
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="classmates"
                                className="transition duration-200 ease-in-out hover:text-gray-500"
                            >
                                Одногрупники
                            </Link>
                        </li>
                        <div>
                            <button
                                className="text-5xl"
                                onClick={() => dispatch(logout())}
                                onMouseEnter={() => {
                                    setIsLHover((_isLHover) => true);
                                }}
                                onMouseLeave={() => {
                                    setIsLHover((_isLHover) => false);
                                }}
                            >
                                <IoLogOut />
                            </button>
                            {isLHover ? (
                                <div className="absolute text-lg top-24 right-7">
                                    <InfoALert text="Выйти из аккаунта" />
                                </div>
                            ) : null}
                        </div>
                    </ul>
                </nav>
            </header>
            <hr className="mb-9" />
        </>
    );
}

export default Header;
