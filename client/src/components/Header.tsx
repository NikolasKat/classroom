import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { BsPatchPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/userSlice";
import InfoALert from "./InfoALert";
import { useState } from "react";
import { AppDispatch, RootState } from "../store/store";
import { ERoles } from "../models/interfaces";

function Header() {
    const [isAHover, setIsAHover] = useState<boolean>(false);
    const [isLHover, setIsLHover] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();
    const roleStatus = useSelector(
        (state: RootState) => state.user.user.userRole,
    );

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
                        {roleStatus === ERoles.TEACHER ? (
                            <div>
                                <button
                                    className="text-5xl"
                                    onMouseEnter={() => {
                                        setIsAHover((_isLHover) => true);
                                    }}
                                    onMouseLeave={() => {
                                        setIsAHover((_isLHover) => false);
                                    }}
                                >
                                    <BsPatchPlusFill />
                                </button>
                                {isAHover ? (
                                    <div className="absolute text-lg">
                                        <InfoALert text="Создать курс" />
                                    </div>
                                ) : null}
                            </div>
                        ) : null}
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
                                className="text-6xl"
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
