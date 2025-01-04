import { Link } from "react-router-dom";
import { useState } from "react";

import { RxPlus } from "react-icons/rx";
import { IoIosCreate } from "react-icons/io";
import { IoEnter } from "react-icons/io5";
// import { GiWinterHat } from "react-icons/gi";

function Header() {
    const [isOpened, setIsOpened] = useState<boolean>(false);

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
                        {/* <li className="hover:text-gray-500 relative">
                            <button
                                className="text-4xl bg-slate-200 rounded-full p-3 hover:text-gray-500"
                                onClick={() => {
                                    setIsOpened((isClicked) => !isClicked);
                                }}
                                onBlur={() => setIsOpened(false)}
                            >
                                <RxPlus />
                            </button>
                            {isOpened ? (
                                <div className="absolute right-0 top-16 z-20 p-4 border border-solid border-gray-200 rounded-lg text-black bg-blue-50">
                                    <ul className="text-2xl">
                                        <div className="flex items-center gap-3">
                                            <IoEnter className="text-4xl" />
                                            <button className="bg-transparent hover:text-gray-500">
                                                Присоединиться
                                            </button>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="flex items-end gap-3">
                                            <IoIosCreate className="text-4xl" />
                                            <button className="bg-transparent hover:text-gray-500">
                                                Создать курс
                                            </button>
                                        </div>
                                    </ul>
                                </div>
                            ) : null}
                        </li> */}
                    </ul>
                </nav>
            </header>
            <hr className="mb-9" />
        </>
    );
}

export default Header;
