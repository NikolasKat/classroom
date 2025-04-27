import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { BsPatchPlusFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/userSlice";
import InfoALert from "./InfoALert";
import { useState } from "react";
import { AppDispatch, RootState } from "../store/store";
import { ERoles } from "../models/interfaces";
import SubjectForm from "./SubjectForm";

function Header() {
    const [isAHover, setIsAHover] = useState<boolean>(false);
    const [isLHover, setIsLHover] = useState<boolean>(false);

    const [isFormClicked, setIsFormClicked] = useState<boolean>(false);
    const [isBurgerClicked, setIsBurgerClicked] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();
    const roleStatus = useSelector(
        (state: RootState) => state.user.user.userRole,
    );

    return (
        <>
            <header className="flex justify-between items-center px-9 py-4 font-medium bg-slate-100">
                <div className="flex items-center gap-9">
                    <Link
                        to="/"
                        className="transition duration-200 ease-in-out flex justify-items-start items-center gap-2 hover:text-gray-500"
                    >
                        <img
                            src="../../public/main_logo.svg"
                            alt="Home Page"
                            className="w-10 sm:w-16 md:w-24 xl:w-24"
                        />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
                            Classroom
                        </h2>
                    </Link>
                </div>

                <nav className="hidden lg:flex items-center gap-5 text-sm md:text-lg xl:text-xl">
                    <ul className="flex items-center gap-4">
                        {roleStatus === ERoles.TEACHER ? (
                            <div>
                                <button
                                    className="text-4xl"
                                    onMouseEnter={() => {
                                        setIsAHover((_isLHover) => true);
                                    }}
                                    onMouseLeave={() => {
                                        setIsAHover((_isLHover) => false);
                                    }}
                                    onClick={() =>
                                        setIsFormClicked(
                                            (isFormClicked) => !isFormClicked,
                                        )
                                    }
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
                        <li className="hover:text-gray-500 mb-1">
                            <Link
                                to="myCourses"
                                className="transition duration-200 ease-in-out hover:text-gray-500"
                            >
                                Мои курсы
                            </Link>
                        </li>
                        <li className="hover:text-gray-500 mb-1">
                            <Link
                                to="allCourses"
                                className="transition duration-200 ease-in-out hover:text-gray-500"
                            >
                                Все курсы
                            </Link>
                        </li>
                        <li className="hover:text-gray-500 mb-1">
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
                <div className="lg:hidden w-full">
                    <div className="absolute top-2 right-2">
                        <button
                            className="relative text-3xl z-50 sm:text-3xl md:text-4xl"
                            onClick={() =>
                                setIsBurgerClicked(
                                    (isBurgerClicked) => !isBurgerClicked,
                                )
                            }
                        >
                            <RxHamburgerMenu />
                        </button>
                    </div>
                    {isBurgerClicked ? (
                        <aside className="absolute top-0 right-0 bg-red-500 w-[50%] h-[100%]"></aside>
                    ) : null}
                </div>
            </header>
            <hr className="mb-9" />
            {isFormClicked ? <SubjectForm /> : null}
        </>
    );
}

export default Header;
