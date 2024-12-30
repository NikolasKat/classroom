import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

import { RxPlus } from "react-icons/rx";
import { IoIosCreate } from "react-icons/io";
import { IoEnter } from "react-icons/io5";

function Header() {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    return (
        <>
            <header className="flex justify-between items-center px-9 py-4 text-3xl font-medium">
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
                    {!isClicked ? (
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
            </header>
            <hr />
            <Outlet />
        </>
    );
}

export default Header;
