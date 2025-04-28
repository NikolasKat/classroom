import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { BsPatchPlusFill } from "react-icons/bs";
import { FiBookOpen, FiBookmark } from "react-icons/fi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { PiStudentFill } from "react-icons/pi";
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
                            className="w-10 sm:w-16 md:w-18 xl:w-21"
                        />
                        <h2 className="text-3xl sm:text-4xl  xl:text-5xl font-bold">
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
                                        <InfoALert text="Create course" />
                                    </div>
                                ) : null}
                            </div>
                        ) : null}
                        <li className="hover:text-gray-500 mb-1">
                            <Link
                                to="myCourses"
                                className="transition duration-200 ease-in-out hover:text-gray-500"
                            >
                                My courses
                            </Link>
                        </li>
                        <li className="hover:text-gray-500 mb-1">
                            <Link
                                to="allCourses"
                                className="transition duration-200 ease-in-out hover:text-gray-500"
                            >
                                All courses
                            </Link>
                        </li>
                        <li className="hover:text-gray-500 mb-1">
                            <Link
                                to="classmates"
                                className="transition duration-200 ease-in-out hover:text-gray-500"
                            >
                                Classmates
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
                                <IoLogOutOutline />
                            </button>
                            {isLHover ? (
                                <div className="absolute text-lg top-18 right-7">
                                    <InfoALert text="Log out" />
                                </div>
                            ) : null}
                        </div>
                    </ul>
                </nav>
                <div className="lg:hidden w-full">
                    <div className="absolute top-5 right-2">
                        <button
                            className="relative text-3xl sm:text-3xl md:text-4xl hover:text-gray-500 transition-colors delay-10 duration-300"
                            onClick={() =>
                                setIsBurgerClicked((isBurgerClicked) => true)
                            }
                        >
                            <RxHamburgerMenu />
                        </button>
                    </div>
                    {isBurgerClicked ? <></> : null}
                </div>

                <aside
                    className={`fixed lg:hidden z-50 pl-3 top-0 right-0 bg-slate-100 w-2/5 h-[100%] ${isBurgerClicked ? "translate-x-0" : "translate-x-full"} ease-in-out duration-300 border border-solid`}
                >
                    <button
                        className=" absolute top-3 right-2 text-3xl sm:text-3xl md:text-4xl hover:text-gray-500 transition-colors delay-10 duration-300"
                        onClick={() =>
                            setIsBurgerClicked((isBurgerClicked) => false)
                        }
                    >
                        <RxCross2 />
                    </button>
                    <ul className="mt-24 font-bold flex flex-col gap-7">
                        <li className="hover:text-gray-500  flex items-center gap-2 transition-colors delay-10 duration-300">
                            <AiOutlineHome className="text-3xl" />
                            <Link
                                to="/"
                                className="transition duration-200 ease-in-out hover:text-gray-500"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-gray-500 flex  items-center gap-2 transition-colors delay-10 duration-300">
                            <FiBookmark className="text-3xl" />

                            <Link
                                to="myCourses"
                                className="transition duration-200 ease-in-out hover:text-gray-500"
                            >
                                My courses
                            </Link>
                        </li>
                        <li className="hover:text-gray-500 flex  items-center gap-2 transition-colors delay-10 duration-300">
                            <FiBookOpen className="text-3xl" />

                            <Link
                                to="allCourses"
                                className="transition duration-200 ease-in-out hover:text-gray-500"
                            >
                                All courses
                            </Link>
                        </li>
                        <li className="hover:text-gray-500 flex items-center gap-2 transition-colors delay-10 duration-300">
                            <PiStudentFill className="text-3xl" />

                            <Link
                                to="classmates"
                                className="transition duration-200 ease-in-out hover:text-gray-500"
                            >
                                Classmates
                            </Link>
                        </li>
                        <li className="hover:text-gray-500 flex items-center gap-2 transition-colors delay-10 duration-300">
                            <IoLogOutOutline className="text-3xl text-red-900" />
                            <Link
                                to="classmates"
                                className="transition duration-200 ease-in-out hover:text-gray-500"
                                onClick={() => dispatch(logout())}
                                onMouseEnter={() => {
                                    setIsLHover((_isLHover) => true);
                                }}
                                onMouseLeave={() => {
                                    setIsLHover((_isLHover) => false);
                                }}
                            >
                                Log out
                            </Link>
                        </li>
                    </ul>
                </aside>
            </header>
            <hr className="mb-9" />
            {isFormClicked ? <SubjectForm /> : null}
        </>
    );
}

export default Header;
