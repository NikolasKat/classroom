import { FC, useState } from "react";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import InfoALert from "./InfoALert";

interface ICardData {
    id: string | number;
    subjectName: string;
    teacherName: string;
    bgImg: string;
    color: string;
    isConnected: boolean;
}

const SubjectCard: FC<ICardData> = ({
    id,
    subjectName,
    teacherName,
    bgImg,
    color,
    isConnected,
}) => {
    const [isLHover, setIsLHover] = useState<boolean>(false);

    return (
        <>
            <div className="flex relative bg-slate-100">
                <div className="flex flex-col justify-between min-w-[450px] min-h-[350px] border border-solid-black font-medium relative rounded-xl">
                    <div
                        style={{ backgroundColor: bgImg }}
                        className="flex justify-between p-6 rounded-t-xl"
                    >
                        <div>
                            <Link
                                to={`/${id}`}
                                className="transition duration-200 ease-in-out text-4xl hover:text-gray-500"
                            >
                                {subjectName}
                            </Link>
                            <h4 className="text-xl mt-3">{teacherName}</h4>
                        </div>
                        <div>
                            <button
                                className="text-4xl bg-transparent"
                                onMouseEnter={() => {
                                    setIsLHover((isLHover) => true);
                                }}
                                onMouseLeave={() => {
                                    setIsLHover((isLHover) => false);
                                }}
                            >
                                {isConnected ? (
                                    <IoLogOutOutline className="transition duration-200 ease-in-out hover:text-gray-500" />
                                ) : (
                                    <IoLogInOutline className="transition duration-200 ease-in-out hover:text-gray-500" />
                                )}
                            </button>
                            {isLHover ? (
                                <div className="absolute top-6 right-20">
                                    <InfoALert
                                        text={
                                            isConnected
                                                ? "Покинуть курс"
                                                : "Присоединиться к курсу"
                                        }
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="p-6 flex justify-end border-t border-solid-black relative text-2xl">
                        {/* <Link
                            to="#"
                            className="text-4xl bg-transparent hover:text-gray-600"
                            onMouseEnter={() => {
                                setIsSHover((isSHover) => true);
                            }}
                            onMouseLeave={() => {
                                setIsSHover((isSHover) => false);
                            }}
                        >
                            <MdOutlineAccessibilityNew className="transition duration-200 ease-in-out hover:text-gray-500" />
                        </Link>
                        {isSHover ? (
                            <div className="absolute top-6 right-20">
                                <InfoALert text="Твоя статистика" />
                            </div>
                        ) : null} */}
                    </div>
                    <div
                        style={{ backgroundColor: color }}
                        className="absolute right-3 top-24 w-[100px] h-[100px] flex justify-center pt-2 rounded-full text-7xl font-normal text-white"
                    >
                        {teacherName.slice(0, 1)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubjectCard;
