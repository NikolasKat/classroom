import { Link } from "react-router-dom";
import { useState } from "react";

import { RxPlus } from "react-icons/rx";
import { IoIosCreate } from "react-icons/io";
import { IoEnter } from "react-icons/io5";
import { GiWinterHat } from "react-icons/gi";

function Header() {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    // const [state, setState] = useState<boolean>(true);

    return (
        <>
            <header className="flex justify-between items-end px-9 py-4 text-3xl font-medium">
                <div className="flex items-center gap-9">
                    <Link
                        to="/"
                        className="flex justify-items-start items-center gap-2 hover:text-gray-500"
                    >
                        <img
                            src="../../public/main_logo.svg"
                            alt="Home Page"
                            className="w-20"
                        />
                        <div className="flex items-end relative">
                            <GiWinterHat className="absolute top-[-12px] left-[7px] scale-x-[-1] text-4xl" />
                            <h2 className="text-7xl font-bold">Classroom</h2>
                        </div>
                    </Link>
                </div>

                <nav className="">
                    <ul className="flex items-center gap-5 text-2xl">
                        <li className="hover:text-gray-500">
                            <Link to="courses">Мои курсы</Link>
                        </li>
                        <li className="hover:text-gray-500">
                            <Link to="classmates">Одногрупники</Link>
                        </li>
                        <li className="relative">
                            <button
                                className="text-4xl bg-slate-100 rounded-full p-3 hover:text-gray-500"
                                onClick={() => {
                                    setIsClicked((isClicked) => !isClicked);
                                }}
                                onBlur={() => setIsClicked(false)}
                            >
                                <RxPlus />
                            </button>
                            {isClicked ? (
                                <div className="absolute right-0 top-16 z-20 p-4 border border-solid border-gray-200 rounded-lg text-blue-800 bg-blue-50">
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
                        </li>
                    </ul>
                </nav>
            </header>

            {/* <header className=" items-center px-9 py-4 text-3xl font-medium">
                <nav className="flex bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <div className="flex items-center gap-9">
                            <Link
                                to="/"
                                className="flex justify-items-start items-center gap-2 hover:text-gray-500"
                            >
                                <img
                                    src="../../public/main_logo.svg"
                                    alt="Home Page"
                                    className="w-20"
                                />
                                <h2>Classroom</h2>
                            </Link>
                        </div>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button
                                data-collapse-toggle="navbar-sticky"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-sticky"
                                aria-expanded="false"
                                onClick={() => setState((state) => !state)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>
                        {state ? (
                            <div
                                className="items-center justify-between w-full md:flex md:w-auto md:order-1"
                                id="navbar-sticky"
                            >
                                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                            aria-current="page"
                                        >
                                            Мои курсы
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            Одногруппники
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ) : null}
                    </div>
                    <div className="relative">
                        <button
                            className="text-4xl bg-slate-100 rounded-full p-3 hover:text-gray-500"
                            onClick={() => {
                                setIsClicked((isClicked) => !isClicked);
                            }}
                            onBlur={() => setIsClicked(false)}
                        >
                            <RxPlus />
                        </button>
                        {isClicked ? (
                            <div className="absolute right-0 top-16 z-20 p-4 border border-solid border-gray-200 rounded-lg text-blue-800 bg-blue-50">
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
                    </div>
                </nav>
            </header> */}
            <hr className="mb-9" />
        </>
    );
}

export default Header;
